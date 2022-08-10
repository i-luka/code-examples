import axios from 'axios'

/**
 * Класс для работы с soap апи Контекста
 */
class ContextClient {
  constructor (token) {
    this.token = token
    this.result = []
    this.request = this.createRequest('/context/api')
  }

  createRequest (url, method = 'POST') {
    return async (type = '', data, signal) => {
      if (!this.token) {
        const token = await this.login()
        localStorage.setItem('contextToken', token)
        data.args[data.method].token = token
      }
      return axios({
        method,
        url: `${url}/${type}`,
        data,
        signal
      })
    }
  }

  async sendRequest (type, data, signal) {
    return this.request(type, data, signal)
  }

  async makeCallRequest ({ type, methodName, params, signal }) {
    return await this.sendRequest(type, {
      service: 'call',
      method: 'call',
      args: {
        call: {
          token: this.token,
          methodName,
          params
        }
      }
    }, signal)
  }

  async getDocument (uuid, type) {
    this.clear()
    const r = await this.sendRequest(type, {
      service: 'document',
      method: 'getDocument',
      args: {
        getDocument: {
          token: this.token,
          documentUuid: uuid,
          humanReadable: 1
        }
      }
    })
    this.result = r.data.return
    return this.result
  }

  async auth (user, pass) {
    const r = await axios({
      method: 'post',
      url: '/context/auth/login',
      data: {}
    })
    this.result = r.data.return
    return this.result
  }

  async findDocuments ({ query, count, offset, type }) {
    this.clear()
    const r = await this.sendRequest(type, {
      service: 'document',
      method: 'findDocuments',
      args: {
        findDocuments: {
          token: this.token,
          count,
          offset,
          query: {
            humanReadable: 1,
            searchRemoved: 0,
            searchVersions: 0,
            sortReverse: 0,
            query
          }
        }
      }
    })
    const status = r.data.return ? 'OK' : 'FAIL'
    const result = status === 'OK' ? r.data.return : r.data
    this.result = result
    return {
      status,
      result
    }
  }

  async fetchPersonalData (type, methodName, uuid, signal) {
    this.clear()
    const r = await this.makeCallRequest({
      type,
      methodName,
      params: {
        entry: {
          key: 'DocUuid',
          value: uuid
        }
      },
      signal
    })
    this.result = r.data._return
    return this.result
  }


  async login () {
    this.token = await this.auth('', '')
    return this.token
  }

  async refreshToken () {
    const request = this.createRequest('/context/auth/refresh', 'GET')
    const res = await request()
    this.token = res.data.return
    return this.token
  }

  clear () {
    this.result = []
  }
}

export { ContextClient }

import Tiff from 'tiff.js'

import { base64ToArrayBuffer } from '../../lib/helper-functions'

export default {
  auth: ({ commit, dispatch, getters }, form) => {
    commit('START_LOADING')
    const client = getters.GET_CLIENT
    return new Promise(
      (resolve, reject) => {
        client.auth()
          .then(r => {
            commit('SET_LOADING_STATE', false)
            client.token = r
            resolve(r)
          })
          .catch(e => {
            e.mess = 'Не удалось залогиниться в "Контексте"'
            commit('STOP_ERROR', e)
            reject(e)
          })
      }
    )
  },
  getDocument: ({ commit, dispatch, getters }, { uuid, type }) => {
    commit('START_LOADING')
    commit('CLEAR_SELECTED_SOLDER')
    const client = getters.GET_CLIENT
    return new Promise(
      (resolve, reject) => {
        client.getDocument(uuid, type)
          .then(r => {
            commit('SET_SOLDER', r)
            commit('SET_LOADING_STATE', false)
            resolve(r)
          })
          .catch(e => {
            e.mess = 'Не удалось получить документ'
            commit('STOP_ERROR', e)
            reject(e)
          })
      }
    )
  },
  findDocuments: ({ commit, dispatch, getters }, search) => {
    commit('START_LOADING')
    commit('CLEAR_SEARCH_RESULT')
    const client = getters.GET_CLIENT
    return new Promise(
      (resolve, reject) => {
        client.findDocuments(search)
          .then(r => {
            if (r.status === 'OK') {
              commit('SET_FINDED_DATA', r.result)
              commit('SET_LOADING_STATE', false)
              resolve(r.result)
            } else {
              commit('STOP_ERROR', { mess: r.result })
              commit('CLEAR_SEARCH_RESULT')
            }
          })
          .catch(e => {
            commit('STOP_ERROR', { mess: e })
            commit('CLEAR_SEARCH_RESULT')
            reject(e)
          })
      }
    )
  },
  refreshToken: ({ commit, getters }) => {
    const client = getters.GET_CLIENT
    return new Promise(
      (resolve, reject) => {
        try {
          const token = client.refreshToken()
          console.log(token)
          commit('SET_TOKEN', token)
          resolve(token)
        } catch (e) {
          localStorage.removeItem('contextToken')
          reject(e)
        }
      }
    )
  },
  fetchPersonalData: async ({ commit, getters }, { methodName, prop, uuid, type }) => {
    const client = getters.GET_CLIENT
    const data = await client.fetchPersonalData(type, methodName, uuid)
    commit('SET_SOLDER_SELECTED_TAB', {
      name: prop,
      input: data.entry
    })
  },
  fetchSolderTabByIndex: async ({ commit, state, dispatch }, { index, uuid }) => {
    const tab = state.sideBarMenu.getTabByIndex(index)
    return await dispatch('fetchPersonalData', {
      methodName: tab.method,
      prop: tab.tab,
      uuid,
      type: 'solders'
    })
  },
  fetchData: async ({ commit, getters }, { methodName, prop, uuid, type, commitName }) => {
    const client = getters.GET_CLIENT
    const data = await client.fetchPersonalData(type, methodName, uuid)
    commit(commitName, {
      name: prop,
      input: data.entry
    })
  },
  fetchTab: async ({ commit, state, dispatch }, { tab, uuid, commitName = 'SET_UNIT_SELECTED_TAB' }) => {
    return await dispatch('fetchData', {
      methodName: tab.method,
      prop: tab.tab,
      uuid,
      type: 'units',
      commitName
    })
  },
  getUnitInfo: ({ getters, commit }, uuid) => {
    const client = getters.GET_CLIENT
    return new Promise(
      (resolve, reject) => {
        client.getDocument(uuid, 'units')
          .then(r => {
            commit('SET_UNIT', r.attributeValues)
            resolve(r)
          })
      }
    )
  },
  getUnitsList: ({ getters, commit }, search) => {
    commit('START_LOADING')
    commit('CLEAR_UNITS_LIST')
    const client = getters.GET_CLIENT
    return new Promise(
      (resolve, reject) => {
        client.findDocuments(search)
          .then(r => {
            if (r.status === 'OK') {
              commit('SET_UNITS_LIST', r.result)
              commit('SET_LOADING_STATE', false)
              resolve(r.result)
            } else {
              commit('STOP_ERROR', r.result)
              commit('CLEAR_SEARCH_RESULT_UNITS')
            }
          })
          .catch(e => {
            commit('STOP_ERROR', { mess: e })
            commit('CLEAR_SEARCH_RESULT_UNITS')
            reject(e)
          })
      }
    )
  }
}

class SearchForm {
  defaultSearchField;
  constructor (mapper) {
    this.mapper = mapper
    this.main = []
    this.data = []
    this.extraData = []
    this.control = {
      placeholder: 'Управление',
      model: '',
      class: 'form-cell-unit-control d-flex f-between',
      type: 'controls',
      uuid: 'b5d7d655-1475-4c07-b1b4-5d785c073ed5',
      component: 'SearchFormRowControls'
    }
    this.showExtraData = false
  }

  [Symbol.iterator] () {
    return this.data[Symbol.iterator]()
  }

  composeFormData () {
    const formData = []
    if (this.main.model !== undefined) {
      formData.push([this.main])
    }
    return formData.concat(this.data).concat(this.extraData)
  }

  isEmptySearch () {
    let i = 0
    const formData = this.composeFormData()
    for (const column of formData) {
      for (const row of column) {
        if (row.selectedOne !== undefined && row.selectedOne !== '') {
          continue
        }
        if (row.model === '' || row.model === null) {
          ++i
        }
      }
    }
    return i === this.inputsCount()
  }

  inputsCount () {
    let i = 0
    const formData = this.composeFormData()
    for (const column of formData) {
      for (const row of column) {
        ++i
        console.log(row.uuid)
      }
    }
    return i
  }

  getFindDocumentsRequestQuery () {
    const query = []
    if (this.isEmptySearch()) {
      query.push({
        attributeUuid: this.mapper.reverseMap[this.defaultSearchField],
        value: '*'
      })
    } else {
      const formData = this.composeFormData()
      for (const column of formData) {
        for (const row of column) {
          if (
            row.model === '' &&
            row.type !== 'select'
          ) {
            continue
          }
          switch (row.type) {
            case 'text': {
              query.push({
                attributeUuid: this.mapper.reverseMap[row.field],
                value: row.model
              })
              break
            }
            case 'select': {
              if (row.selectedOne !== '') {
                query.push({
                  attributeUuid: this.mapper.reverseMap[row.field],
                  value: row.selectedOne
                })
              }
              break
            }
            case 'datepicker-year': {
              query.push({
                attributeUuid: this.mapper.reverseMap[row.field],
                value: row.model.getFullYear()
              })
              break
            }
            default:
              continue
          }
        }
      }
    }
    return query
  }

  clearForm () {
    const formData = this.composeFormData()
    for (const column of formData) {
      for (const row of column) {
        row.style = {
          top: '50%',
          left: '15px',
          fontSize: '18px',
          lineHeight: '18px',
          color: '#7DA2C3FF'
        }
        if (
          row.model === '' &&
          row.type !== 'select'
        ) {
          continue
        }
        switch (row.type) {
          case 'text':
          case 'datepicker':
          case 'datepicker-year': {
            row.model = ''
            break
          }
          case 'select': {
            row.selectedOne = ''
            break
          }
          default:
            continue
        }
      }
    }
  }

  closeSearchOptionsExceptOne (field) {
    for (const column of this.data) {
      for (const row of column) {
        if (row.uuid !== field.uuid || row.range !== field.range) {
          row.showSearchOptions = false
        }
      }
    }
    for (const column of this.extraData) {
      for (const row of column) {
        if (row.uuid !== field.uuid || row.range !== field.range) {
          row.showSearchOptions = false
        }
      }
    }
  }

  notDefaultSearch (field) {
    return this.isExcludedSearchActive(field) || this.isSearchOptionsChanged(field)
  }

  isSearchOptionsChanged (field) {
    return field.selectedSearchOption && field.selectedSearchOption !== 'phraseSearch'
  }

  isExcludedSearchActive (field) {
    return field.excludeSearch.checked
  }

  getSeparator (str) {
    const m = str.match(/\s|,|\//)
    return m ? m[0] : null
  }

  setSelectOptions ({ dic, names }) {
    const found = this.processSelectOptions({ dic, names, data: this.data })
    if (!found) {
      this.processSelectOptions({ dic, names, data: this.extraData })
    }
  }

  processSelectOptions ({ dic, names, data }) {
    let found = false
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        if (data[i][j].dic === dic) {
          data[i][j].options = [
            ...data[i][j].options,
            ...names
          ]
          found = true
          break
        }
      }
      if (found) break
    }
    return found
  }
}

export { SearchForm }

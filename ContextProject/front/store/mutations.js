import { Solder } from '../../lib/Solder'
import { Mapper } from '../../lib/Mapper'
import { Unit } from '../../lib/Unit'

export default {
  /**
   * Добавляет в.с. документ
   * @param state
   * @param doc
   * @param name
   * @constructor
   */
  SET_SOLDER_DOC: (state, { doc, name }) => {
    const solder = new Solder()
    solder[name] = doc
    state.solderSelected = Object.assign(solder, state.solderSelected)
  },
  /**
   * Добавляет в.ч. документ
   * @param state
   * @param doc
   * @param name
   * @constructor
   */
  SET_UNIT_DOC: (state, { doc, name }) => {
    const unit = new Unit()
    unit[name] = doc
    state.unit = Object.assign(unit, state.unit)
  },
  /**
   * Устанавливает список найденных в.с.
   * @param state
   * @param data
   * @constructor
   */
  SET_FINDED_DATA: (state, data) => {
    if (data === undefined) return
    const solders = data.results
    const map = data.columnNrToColumnUuid
    let solderDocMapped, soldersList
    if (Array.isArray(solders)) {
      soldersList = Array.isArray(solders) ? solders.map(solderDoc => {
        const solder = new Solder()
        solder.uuid = solderDoc.uuid
        if (
          solderDoc &&
          solderDoc.mapColumnNrToValue
        ) {
          solderDocMapped = solderDoc.mapColumnNrToValue.filter(s => {
            const key = Mapper.getName(map[s.key].value)
            return key !== undefined
          })
          solderDocMapped = solderDocMapped.map(s => {
            const key = Mapper.getName(map[s.key].value)
            return { [key]: s.value }
          })
          for (const map of solderDocMapped) {
            for (const p in map) {
              if (p !== undefined) {
                solder[p] = map[p]
              }
            }
          }
        }
        return solder
      })
        : []
    } else if (typeof solders === 'object') {
      const solder = new Solder()
      solder.uuid = solders.uuid
      if (
        solders &&
        solders.mapColumnNrToValue
      ) {
        solderDocMapped = solders.mapColumnNrToValue.filter(s => {
          const key = Mapper.getName(map[s.key].value)
          return key !== undefined
        })
        solderDocMapped = solderDocMapped.map(s => {
          const key = Mapper.getName(map[s.key].value)
          return { [key]: s.value }
        })
        for (const map of solderDocMapped) {
          for (const p in map) {
            if (p !== undefined) {
              solder[p] = map[p]
            }
          }
        }
      }
      soldersList = [solder]
    } else {
      soldersList = []
    }
    const soldersListMap = {}
    for (const solder of soldersList) {
      soldersListMap[solder.uuid] = solder
    }
    state.soldersList = { ...soldersListMap }
    state.searchSoldersTotal = data.total
  }
}

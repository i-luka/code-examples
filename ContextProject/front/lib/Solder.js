import { Mapper } from './Mapper'

/**
 * Класс представляющий документ Контекста отвечающий за в.с.
 */
class Solder {
  uuid
  qualifier
  position
  surname
  name
  patronymic
  cellular
  dob
  personalNumber
  tableNumber
  foto
  registration
  sex
  pob
  constructor (
    uuid,
    rang,
    qualifier,
    position,
    surname,
    name,
    patronymic,
    cellular,
    dob,
    personalNumber,
    tableNumber,
    registration,
    sex,
    pob
  ) {
    this.uuid = uuid
    this.rang = rang
    this.qualifier = qualifier
    this.position = position
    this.surname = surname
    this.name = name
    this.patronymic = patronymic
    this.cellular = cellular
    this.dob = dob
    this.personalNumber = personalNumber
    this.tableNumber = tableNumber
    this.foto = require('@/assets/images/avatars/img.png')
    this.registration = registration
    this.sex = sex
    this.pob = pob
  }

  /**
   * Заполнение модели из ответа Контекста
   * @param data
   */
  fillFromContextResponse (data) {
    for (const attribute of data.attributeValues) {
      const property = Mapper.getName(attribute.key)
      if (property) {
        this[property] = attribute.value
      }
    }
  }
  getBrief () {
    return []
  }

  getFullname () {
    return `${this.getSurname()} ${this.getName()} ${this.getPatronymic()}`
  }

  getSurname () {
    return this.surname ?? 'отсутствует'
  }

  getName () {
    return this.name ?? 'отсутствует'
  }

  getPatronymic () {
    return this.patronymic ?? 'отсутствует'
  }

  getPersonalData () {
    return [
        [],
        []
    ]
  }

  hasTab (name) {
    return this[name] !== undefined
  }

  getTabData (name) {
    return this[name] ?? []
  }

  getTableNumber () {
    return this.tableNumber ?? 'отсутствует'
  }

  getPersonalNumber () {
    return this.personalNumber ?? 'отсутствует'
  }

  getRang () {
    return this.rang ?? 'отсутствует'
  }

  getQualifier () {
    return this.qualifier ?? 'отсутствует'
  }

  getDob () {
    return this.dob ?? 'отсутствует'
  }

  getCellular () {
    return this.cellular ?? 'отсутствует'
  }

  getSex () {
    return this.sex ?? 'отсутствует'
  }

  getPob () {
    return this.pob ?? 'отсутствует'
  }

  getZagranIssueDate () {
    return this.zagranIssueDate ?? 'отсутствует'
  }

  getZagranAuthoruty () {
    return this.zagranAuthority ?? 'отсутствует'
  }

  getZagranType () {
    return this.zagranType ?? 'отсутствует'
  }

  getZagranExpireDate () {
    return this.zagranExpireDate ?? 'отсутствует'
  }

  getZagranPassportNumber () {
    return this.zagranPassportNumber ?? 'отсутствует'
  }

  getZagranIssuingStateCode () {
    return this.zagranIssuingStateCode ?? 'отсутствует'
  }

  getSlujebnoeNumber () {
    return this.slujebnoeNumber ?? 'отсутствует'
  }

  getNation () {
    return this.nation ?? 'отсутствует'
  }

  getSlujebnoeIssueDate () {
    return this.slujebnoeIssueDate ?? 'отсутствует'
  }

  getSlujebnoeExpiredate () {
    return this.slujebnoeExpiredate ?? 'отсутствует'
  }

  getSlujebnoeAuthority () {
    return this.slujebnoeAuthority ?? 'отсутствует'
  }

  getSlujebnoeType () {
    return this.slujebnoeType ?? 'отсутствует'
  }

  getSlujebnoeIssueState () {
    return this.slujebnoeIssueState ?? 'отсутствует'
  }
}
export { Solder }

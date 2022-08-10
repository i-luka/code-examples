import { SearchForm } from './SearchForm'

class UnitSearchForm extends SearchForm {
  constructor (mapper) {
    super(mapper)
    this.defaultSearchField = 'unitName'
    this.main = {
      model: ''
    }
    this.data = [
      [
        {
          placeholder: 'Действительное наименование объекта',
          model: '',
          class: 'form-cell-unit',
          fontSize: '18px',
          lineHeight: '21px',
          type: 'text',
          // uuid: 'cbc32146-ba0f-45f1-825b-810aacd78f34',
          field: 'title',
          component: 'SearchFormRow',
          style: {
            top: '50%',
            left: '15px',
            fontSize: '18px',
            lineHeight: '18px',
            color: '#7DA2C3FF'
          },
          showSearchOptions: false,
          selectedSearchOption: 'phraseSearch',
          searchOptions: {
            phraseSearch: {
              title: 'Поиск фразы',
              value: 'phraseSearch',
              checked: true,
              type: 'radio',
              name: 'search_options_un'
            },
            andSearch: {
              title: 'Поиск всех слов',
              value: 'andSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_un'
            },
            orSearch: {
              title: 'Поиск любого слова',
              value: 'orSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_un'
            },
            extendedSearch: {
              title: 'Расширенный поиск',
              value: 'extendedSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_un'
            }
          },
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_un'
          }
        },
        {
          placeholder: 'Обозначение',
          model: '',
          class: 'form-cell-unit',
          type: 'text',
          // uuid: '0c1dcf1d-4669-4e5a-be7f-04ef4c452852',
          field: 'unitName',
          component: 'SearchFormRow',
          style: {
            top: '50%',
            left: '15px',
            fontSize: '18px',
            lineHeight: '18px',
            color: '#7DA2C3FF'
          },
          showSearchOptions: false,
          selectedSearchOption: 'phraseSearch',
          searchOptions: {
            phraseSearch: {
              title: 'Поиск фразы',
              value: 'phraseSearch',
              checked: true,
              type: 'radio',
              name: 'search_options_un'
            },
            andSearch: {
              title: 'Поиск всех слов',
              value: 'andSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_un'
            },
            orSearch: {
              title: 'Поиск любого слова',
              value: 'orSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_un'
            },
            extendedSearch: {
              title: 'Расширенный поиск',
              value: 'extendedSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_un'
            }
          },
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_un'
          }
        },
        {
          placeholder: 'Условное наименование объекта',
          model: '',
          class: 'form-cell-unit',
          type: 'text',
          // uuid: 'bf6a2e52-7564-48ab-8f0d-8c6a97b2bc74',
          field: 'unitRelativeName',
          component: 'SearchFormRow',
          style: {
            top: '50%',
            left: '15px',
            fontSize: '18px',
            lineHeight: '18px',
            color: '#7DA2C3FF'
          },
          showSearchOptions: false,
          selectedSearchOption: 'phraseSearch',
          searchOptions: {
            phraseSearch: {
              title: 'Поиск фразы',
              value: 'phraseSearch',
              checked: true,
              type: 'radio',
              name: 'search_options_un'
            },
            andSearch: {
              title: 'Поиск всех слов',
              value: 'andSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_un'
            },
            orSearch: {
              title: 'Поиск любого слова',
              value: 'orSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_un'
            },
            extendedSearch: {
              title: 'Расширенный поиск',
              value: 'extendedSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_un'
            }
          },
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_un'
          }
        }
      ],
      [
        {
          placeholder: 'Фамилия должностного лица',
          model: '',
          class: 'form-cell-unit',
          type: 'text',
          // uuid: '06b63574-3ada-450b-be3a-cfff218ba907',
          field: 'officialFIO',
          component: 'SearchFormRow',
          fontSize: '18px',
          lineHeight: '21px',
          style: {
            top: '50%',
            left: '15px',
            fontSize: '18px',
            lineHeight: '18px',
            color: '#7DA2C3FF'
          },
          showSearchOptions: false,
          selectedSearchOption: 'phraseSearch',
          searchOptions: {
            phraseSearch: {
              title: 'Поиск фразы',
              value: 'phraseSearch',
              checked: true,
              type: 'radio',
              name: 'search_options_cm'
            },
            andSearch: {
              title: 'Поиск всех слов',
              value: 'andSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_cm'
            },
            orSearch: {
              title: 'Поиск любого слова',
              value: 'orSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_cm'
            },
            extendedSearch: {
              title: 'Расширенный поиск',
              value: 'extendedSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_cm'
            }
          },
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_cm'
          }
        },
        {
          placeholder: 'Подчиненность',
          model: '',
          class: 'form-cell-unit',
          type: 'text',
          // uuid: '06b63574-3ada-450b-be3a-cfff218ba907',
          field: 'unitOSK',
          component: 'SearchFormRow',
          fontSize: '18px',
          lineHeight: '21px',
          style: {
            top: '50%',
            left: '15px',
            fontSize: '18px',
            lineHeight: '18px',
            color: '#7DA2C3FF'
          },
          showSearchOptions: false,
          selectedSearchOption: 'phraseSearch',
          searchOptions: {
            phraseSearch: {
              title: 'Поиск фразы',
              value: 'phraseSearch',
              checked: true,
              type: 'radio',
              name: 'search_options_cm'
            },
            andSearch: {
              title: 'Поиск всех слов',
              value: 'andSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_cm'
            },
            orSearch: {
              title: 'Поиск любого слова',
              value: 'orSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_cm'
            },
            extendedSearch: {
              title: 'Расширенный поиск',
              value: 'extendedSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_cm'
            }
          },
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_cm'
          }
        },
        {
          placeholder: 'Селект',
          dic: 'typeArmyCatalog',
          model: '',
          class: 'form-cell-unit-search',
          selectClass: 'unit-search-select',
          optionClass: 'unit-search-option',
          type: 'select',
          // uuid: '64406428-2cd9-4387-a71b-4d254849e701',
          field: 'unitType',
          selectedOne: '',
          fontSize: '18px',
          lineHeight: '21px',
          options: [
            {
              value: '',
              label: 'Тип воинской части'
            }
            // ,
            // {
            //   value: 'd8fd7cab-0b87-46b5-a5f5-9ac62ccc0a62',
            //   label: 'Пункт отбора'
            // },
            // {
            //   value: 'd4beb441-1cc8-48ab-b4d9-417f73f7c5d4',
            //   label: 'Основной КО'
            // },
            // {
            //   value: 'a83188f7-69d0-4b0e-9191-aa4462aa90ff',
            //   label: 'Вспомогательный КО'
            // }
          ],
          component: 'SearchFormRowSelect',
          showSearchOptions: false,
          selectedSearchOption: 'phraseSearch',
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_ut'
          }
        }
      ],
      [
        {
          placeholder: 'Адрес объекта',
          model: '',
          class: 'form-cell-unit',
          type: 'text',
          // uuid: '1146d0a1-efa1-4f94-8afa-602601e75736',
          field: 'addressUnit',
          component: 'SearchFormRow',
          fontSize: '18px',
          lineHeight: '21px',
          style: {
            top: '50%',
            left: '15px',
            fontSize: '18px',
            lineHeight: '18px',
            color: '#7DA2C3FF'
          },
          showSearchOptions: false,
          selectedSearchOption: 'phraseSearch',
          searchOptions: {
            phraseSearch: {
              title: 'Поиск фразы',
              value: 'phraseSearch',
              checked: true,
              type: 'radio',
              name: 'search_options_un'
            },
            andSearch: {
              title: 'Поиск всех слов',
              value: 'andSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_un'
            },
            orSearch: {
              title: 'Поиск любого слова',
              value: 'orSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_un'
            },
            extendedSearch: {
              title: 'Расширенный поиск',
              value: 'extendedSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_un'
            }
          },
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_un'
          }
        },
        {
          placeholder: 'Должность',
          model: '',
          class: 'form-cell-unit',
          type: 'text',
          // uuid: '06b63574-3ada-450b-be3a-cfff218ba907',
          field: 'officialFIO',
          component: 'SearchFormRow',
          fontSize: '18px',
          lineHeight: '21px',
          style: {
            top: '50%',
            left: '15px',
            fontSize: '18px',
            lineHeight: '18px',
            color: '#7DA2C3FF'
          },
          showSearchOptions: false,
          selectedSearchOption: 'phraseSearch',
          searchOptions: {
            phraseSearch: {
              title: 'Поиск фразы',
              value: 'phraseSearch',
              checked: true,
              type: 'radio',
              name: 'search_options_cm'
            },
            andSearch: {
              title: 'Поиск всех слов',
              value: 'andSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_cm'
            },
            orSearch: {
              title: 'Поиск любого слова',
              value: 'orSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_cm'
            },
            extendedSearch: {
              title: 'Расширенный поиск',
              value: 'extendedSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_cm'
            }
          },
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_cm'
          }
        },
        {
          placeholder: 'Наименование КО',
          model: '',
          class: 'form-cell-unit',
          type: 'text',
          // uuid: '0dd6792a-23be-4ce1-8f26-5648d1e0fe81',
          field: 'unit',
          component: 'SearchFormRow',
          fontSize: '18px',
          lineHeight: '21px',
          style: {
            top: '50%',
            left: '15px',
            fontSize: '18px',
            lineHeight: '18px',
            color: '#7DA2C3FF'
          },
          showSearchOptions: false,
          selectedSearchOption: 'phraseSearch',
          searchOptions: {
            phraseSearch: {
              title: 'Поиск фразы',
              value: 'phraseSearch',
              checked: true,
              type: 'radio',
              name: 'search_options_cm'
            },
            andSearch: {
              title: 'Поиск всех слов',
              value: 'andSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_cm'
            },
            orSearch: {
              title: 'Поиск любого слова',
              value: 'orSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_cm'
            },
            extendedSearch: {
              title: 'Расширенный поиск',
              value: 'extendedSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_cm'
            }
          },
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_cm'
          }
        }
      ]
    ]
    this.extraData = [
      [
        {
          placeholder: 'Электронный адрес',
          model: '',
          class: 'form-cell-unit',
          type: 'text',
          // uuid: '81db70a0-2fae-473d-93c7-c03651582b6c',
          field: 'emails',
          component: 'SearchFormRow',
          fontSize: '18px',
          lineHeight: '21px',
          style: {
            top: '50%',
            left: '15px',
            fontSize: '18px',
            lineHeight: '18px',
            color: '#7DA2C3FF'
          },
          showSearchOptions: false,
          selectedSearchOption: 'phraseSearch',
          searchOptions: {
            phraseSearch: {
              title: 'Поиск фразы',
              value: 'phraseSearch',
              checked: true,
              type: 'radio',
              name: 'search_options_cd'
            },
            andSearch: {
              title: 'Поиск всех слов',
              value: 'andSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_cd'
            },
            orSearch: {
              title: 'Поиск любого слова',
              value: 'orSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_cd'
            },
            extendedSearch: {
              title: 'Расширенный поиск',
              value: 'extendedSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_cd'
            }
          },
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_cd'
          }
        },
        {
          placeholder: 'На кадровом обеспечении (всего)',
          model: '',
          class: 'form-cell-unit',
          type: 'text',
          // uuid: 'a329b945-df10-4f5a-829c-054085cb44a1',
          field: 'staff',
          component: 'SearchFormRow',
          fontSize: '18px',
          lineHeight: '21px',
          style: {
            top: '50%',
            left: '15px',
            fontSize: '18px',
            lineHeight: '18px',
            color: '#7DA2C3FF'
          },
          showSearchOptions: false,
          selectedSearchOption: 'phraseSearch',
          searchOptions: {
            phraseSearch: {
              title: 'Поиск фразы',
              value: 'phraseSearch',
              checked: true,
              type: 'radio',
              name: 'search_options_st'
            },
            andSearch: {
              title: 'Поиск всех слов',
              value: 'andSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_st'
            },
            orSearch: {
              title: 'Поиск любого слова',
              value: 'orSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_st'
            },
            extendedSearch: {
              title: 'Расширенный поиск',
              value: 'extendedSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_st'
            }
          },
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_st'
          }
        }
      ],
      [
        {
          placeholder: 'Год оснащения АСПУ ВС РФ',
          model: '',
          class: 'form-cell-unit',
          inputClass: 'datepicker',
          type: 'datepicker-year',
          // uuid: 'e7854134-7024-4077-860d-f51ddd94482c',
          field: 'unitEquipmentDate',
          range: 'till',
          component: 'SearchFormRowDateYear',
          fontSize: '18px',
          lineHeight: '21px',
          style: {
            top: '50%',
            left: '15px',
            fontSize: '18px',
            lineHeight: '18px',
            color: '#7DA2C3FF'
          },
          showSearchOptions: false,
          selectedSearchOption: 'phraseSearch',
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_det'
          }
        },
        {
          placeholder: 'Количество ПИРО "Алушта"',
          model: '',
          class: 'form-cell-unit',
          type: 'text',
          // uuid: '0acda7ff-7e40-4a4f-835c-b96449038fca',
          field: 'unitPIRO',
          component: 'SearchFormRow',
          fontSize: '18px',
          lineHeight: '21px',
          style: {
            top: '50%',
            left: '15px',
            fontSize: '18px',
            lineHeight: '18px',
            color: '#7DA2C3FF'
          },
          showSearchOptions: false,
          selectedSearchOption: 'phraseSearch',
          searchOptions: {
            phraseSearch: {
              title: 'Поиск фразы',
              value: 'phraseSearch',
              checked: true,
              type: 'radio',
              name: 'search_options_em'
            },
            andSearch: {
              title: 'Поиск всех слов',
              value: 'andSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_em'
            },
            orSearch: {
              title: 'Поиск любого слова',
              value: 'orSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_em'
            },
            extendedSearch: {
              title: 'Расширенный поиск',
              value: 'extendedSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_em'
            }
          },
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_em'
          }
        }
      ]
    ]
  }
}
export { UnitSearchForm }

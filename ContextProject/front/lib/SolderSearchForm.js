import { SearchForm } from './SearchForm'

class SolderSearchForm extends SearchForm {
  constructor (mapper) {
    super(mapper)
    this.defaultSearchField = 'personalNumber'
    this.data = [
      [
        {
          placeholder: 'Фамилия',
          model: '',
          class: 'form-cell',
          type: 'text',
          // uuid: 'ee992eb3-2924-486d-b2ff-1a3a1d9caa7b',
          field: 'surname',
          component: 'SearchFormRow',
          style: {
            top: '50%',
            left: '15px',
            fontSize: '18px',
            lineHeight: '21px',
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
              name: 'search_options_f'
            },
            andSearch: {
              title: 'Поиск всех слов',
              value: 'andSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_f'
            },
            orSearch: {
              title: 'Поиск любого слова',
              value: 'orSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_f'
            },
            extendedSearch: {
              title: 'Расширенный поиск',
              value: 'extendedSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_f'
            }
          },
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_f'
          }
        },
        {
          placeholder: 'Личный номер',
          model: '',
          class: 'form-cell',
          type: 'text',
          // uuid: '0639dea4-feca-40c7-be08-2da854f40a79',
          field: 'personalNumber',
          component: 'SearchFormRow',
          style: {
            top: '50%',
            left: '15px',
            fontSize: '18px',
            lineHeight: '21px',
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
              name: 'search_options_pn'
            },
            andSearch: {
              title: 'Поиск всех слов',
              value: 'andSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_pn'
            },
            orSearch: {
              title: 'Поиск любого слова',
              value: 'orSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_pn'
            },
            extendedSearch: {
              title: 'Расширенный поиск',
              value: 'extendedSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_pn'
            }
          },
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_pn'
          }
        },
        {
          placeholder: 'Дата рождения c',
          model: '',
          class: 'form-cell',
          inputClass: 'datepicker',
          type: 'datepicker',
          // uuid: '1cb75f2d-2c60-4f98-bebd-708d19e27d99',
          field: 'dob',
          range: 'from',
          component: 'SearchFormRowDate',
          style: {
            top: '50%',
            left: '15px',
            fontSize: '18px',
            lineHeight: '21px',
            color: '#7DA2C3FF'
          },
          showSearchOptions: false,
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_df'
          }
        }
      ],
      [
        {
          placeholder: 'Имя',
          model: '',
          class: 'form-cell',
          type: 'text',
          // uuid: 'c0fb0102-2afb-467b-8bb4-6f7500c53fc8',
          field: 'name',
          component: 'SearchFormRow',
          style: {
            top: '50%',
            left: '15px',
            fontSize: '18px',
            lineHeight: '21px',
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
              name: 'search_options_n'
            },
            andSearch: {
              title: 'Поиск всех слов',
              value: 'andSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_n'
            },
            orSearch: {
              title: 'Поиск любого слова',
              value: 'orSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_n'
            },
            extendedSearch: {
              title: 'Расширенный поиск',
              value: 'extendedSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_n'
            }
          },
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_n'
          }
        },
        {
          placeholder: 'Класс',
          dic: 'rankClassCatalog',
          model: '',
          class: 'form-cell-solder-search',
          selectClass: 'solder-search-select',
          optionClass: 'solder-search-option',
          type: 'select',
          // uuid: '15836c14-e4d6-438c-a999-c3426970ee4d',
          field: 'qualifier',
          selectedOne: '',
          fontSize: '14px',
          options: [
            {
              value: '',
              label: 'Класс'
            }
            // ,
            // {
            //   value: this.mapper.qualifiers.apsent,
            //   label: 'Не указано'
            // },
            // {
            //   value: this.mapper.qualifiers.SNG,
            //   label: 'СНГ'
            // },
            // {
            //   value: this.mapper.qualifiers.liquidStaff,
            //   label: 'Переменный состав'
            // },
            // {
            //   value: this.mapper.qualifiers.unreturnedLost,
            //   label: 'Безвозвратные потери'
            // },
            // {
            //   value: this.mapper.qualifiers.veterans,
            //   label: 'Ветераны'
            // },
            // {
            //   value: this.mapper.qualifiers.locked,
            //   label: 'Осужденные'
            // },
            // {
            //   value: this.mapper.qualifiers.cadets,
            //   label: 'Курсанты'
            // },
            // {
            //   value: this.mapper.qualifiers.retired,
            //   label: 'Отставка'
            // },
            // {
            //   value: this.mapper.qualifiers.reserved,
            //   label: 'Запас'
            // },
            // {
            //   value: this.mapper.qualifiers.active,
            //   label: 'Действующие'
            // },
            // {
            //   value: this.mapper.qualifiers.seniorOfficers,
            //   label: 'Высшие офицеры'
            // }
          ],
          component: 'SearchFormRowSelect',
          showSearchOptions: false,
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_q'
          }
        },
        {
          placeholder: 'Дата рождения по',
          model: '',
          class: 'form-cell',
          inputClass: 'datepicker',
          type: 'datepicker',
          // uuid: '1cb75f2d-2c60-4f98-bebd-708d19e27d99',
          field: 'dob',
          range: 'to',
          component: 'SearchFormRowDate',
          style: {
            top: '50%',
            left: '15px',
            fontSize: '18px',
            lineHeight: '21px',
            color: '#7DA2C3FF'
          },
          showSearchOptions: false,
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_dt'
          }
        }
      ],
      [
        {
          placeholder: 'Отчество',
          model: '',
          class: 'form-cell',
          type: 'text',
          // uuid: '50444737-cfa3-4939-a577-47a8550d790e',
          field: 'patronymic',
          component: 'SearchFormRow',
          style: {
            top: '50%',
            left: '15px',
            fontSize: '18px',
            lineHeight: '21px',
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
              name: 'search_options_p'
            },
            andSearch: {
              title: 'Поиск всех слов',
              value: 'andSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_p'
            },
            orSearch: {
              title: 'Поиск любого слова',
              value: 'orSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_p'
            },
            extendedSearch: {
              title: 'Расширенный поиск',
              value: 'extendedSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_p'
            }
          },
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_p'
          }
        },
        {
          placeholder: 'Должность',
          model: '',
          class: 'form-cell',
          type: 'text',
          // uuid: 'ttyuryutruy',
          field: 'position',
          component: 'SearchFormRow',
          style: {
            top: '50%',
            left: '15px',
            fontSize: '18px',
            lineHeight: '21px',
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
              name: 'search_options_ps'
            },
            andSearch: {
              title: 'Поиск всех слов',
              value: 'andSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_ps'
            },
            orSearch: {
              title: 'Поиск любого слова',
              value: 'orSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_ps'
            },
            extendedSearch: {
              title: 'Расширенный поиск',
              value: 'extendedSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_ps'
            }
          },
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_ps'
          }
        },
        {
          placeholder: 'Воинское звание',
          dic: 'rankCatalog',
          model: '',
          class: 'form-cell-solder-search',
          selectClass: 'solder-search-select',
          optionClass: 'solder-search-option',
          type: 'select',
          // uuid: '715f5780-db95-44a7-b8e8-43a28618d7f8',
          field: 'rang',
          selectedOne: '',
          fontSize: '14px',
          options: [
            {
              value: '',
              label: 'Воинское звание'
            }
            // ,
            // {
            //   value: 'fb55f797-ad5f-48f0-b8ac-81697224a4a8',
            //   label: 'Старший лейтенант'
            // },
            // {
            //   value: '11f3c76f-ae1f-4748-89c1-b8f48ffe1b2d',
            //   label: 'Генерал-полковник'
            // },
            // {
            //   value: '55f9e49c-fcb2-4c8d-a4e1-470119a5de8b',
            //   label: 'Генерал армии'
            // },
            // {
            //   value: 'b60296cd-8cca-4738-85a4-c72e1881eef0',
            //   label: 'Капитан'
            // },
            // {
            //   value: 'a9d8c6a7-aff4-402e-bf2a-18efda9f13e3',
            //   label: 'Майор'
            // },
            // {
            //   value: '0397110a-966a-4d7d-8475-87aac2cb0af2',
            //   label: 'Подполковник'
            // },
            // {
            //   value: '54eba81a-38ba-41fd-8131-7500c3f7a3b5',
            //   label: 'Полковник'
            // },
            // {
            //   value: '80ac3c41-09f9-45a7-b182-3ae281624014',
            //   label: 'Контр-адмирал'
            // },
            // {
            //   value: '9f9089ff-8b0e-4644-a3ea-5805c3238958',
            //   label: 'Генерал-майор'
            // },
            // {
            //   value: '42f5080c-e77c-4c5a-a74a-cddd50293168',
            //   label: 'Генерал-лейтенант'
            // },
            // {
            //   value: 'cffeebde-0fc3-4333-9412-51809e4a0f4f',
            //   label: 'Маршал Советского Союза'
            // },
            // {
            //   value: '5d4988c9-1840-4055-b968-c3f4450beb77',
            //   label: 'Полковник медицинской службы'
            // },
            // {
            //   value: '4aacfeb2-aa6d-4781-b33a-7891c47473b5',
            //   label: 'Капитан 2 ранга'
            // },
            // {
            //   value: '8934eb70-97e3-425b-9b81-2528a900de1a',
            //   label: 'Капитан 1 ранга'
            // },
            // {
            //   value: '4a5df283-f1e0-49e5-aea2-25e1ea68667a',
            //   label: 'Ефрейтор'
            // },
            // {
            //   value: '67f8d96a-1648-4b99-a845-8f6d4b66eba7',
            //   label: 'Маршал Российской Федерации'
            // },
            // {
            //   value: '711394ec-8e8d-43e3-952d-42e4b426104e',
            //   label: 'Генералиссимус Советского Союза'
            // }
          ],
          component: 'SearchFormRowSelect',
          style: {
            top: '50%',
            left: '15px',
            fontSize: '18px',
            lineHeight: '21px',
            color: '#7DA2C3FF'
          },
          showSearchOptions: false,
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_r'
          }
        }
      ]
    ]
    this.extraData = [
      [
        {
          placeholder: 'Селект',
          dic: 'genderCatalog',
          model: '',
          class: 'form-cell-solder-search',
          selectClass: 'solder-search-select',
          optionClass: 'solder-search-option',
          type: 'select',
          // uuid: 'b5d7d655-1475-4c07-b1b4-5d785c073ed5',
          field: 'sex',
          selectedOne: '',
          options: [
            {
              value: '',
              label: 'Пол'
            }
          ],
          component: 'SearchFormRowSelect',
          showSearchOptions: false,
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_sx'
          }
        },
        {
          placeholder: 'Табельный номер',
          model: '',
          class: 'form-cell',
          type: 'text',
          // uuid: '8b3b6ef7-ec50-464f-89dc-a82d51078c6c',
          field: 'tableNumber',
          component: 'SearchFormRow',
          style: {
            top: '50%',
            left: '15px',
            fontSize: '18px',
            lineHeight: '21px',
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
              name: 'search_options_tn'
            },
            andSearch: {
              title: 'Поиск всех слов',
              value: 'andSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_tn'
            },
            orSearch: {
              title: 'Поиск любого слова',
              value: 'orSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_tn'
            },
            extendedSearch: {
              title: 'Расширенный поиск',
              value: 'extendedSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_tn'
            }
          },
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_tn'
          }
        },
        {
          placeholder: 'Мобильный телефон',
          model: '',
          class: 'form-cell',
          type: 'text',
          // uuid: '',
          field: 'cellular',
          component: 'SearchFormRow',
          style: {
            top: '50%',
            left: '15px',
            fontSize: '18px',
            lineHeight: '21px',
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
              name: 'search_options_ph'
            },
            andSearch: {
              title: 'Поиск всех слов',
              value: 'andSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_ph'
            },
            orSearch: {
              title: 'Поиск любого слова',
              value: 'orSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_ph'
            },
            extendedSearch: {
              title: 'Расширенный поиск',
              value: 'extendedSearch',
              checked: false,
              type: 'radio',
              name: 'search_options_ph'
            }
          },
          excludeSearch: {
            title: 'Искать за исключением',
            checked: false,
            type: 'checkbox',
            name: 'excluded_search_ph'
          }
        }
      ]
    ]
  }
}
export { SolderSearchForm }

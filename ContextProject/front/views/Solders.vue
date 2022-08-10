<template>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
import Paginate from 'vuejs-paginate'

import { deapCloning } from '../../lib/helper-functions'

import SearchForm from '../components/common/forms/SearchForm'
import SoldersList from '../components/common/lists/SoldersList'
import PaginatorSelect from '@/components/common/controls/PaginatorSelect'
import ListViewSwitcher from '@/components/common/controls/ListViewSwitcher'

import { SolderSearchForm } from '../../lib/SolderSearchForm'
import { Mapper } from '../../lib/Mapper'

export default {
  name: 'Solders',
  components: { },
  data: () => ({}),
  methods: {
    ...mapActions([
      'findDocuments',
      'downloadSoldersListFotos'
    ]),
    ...mapMutations([
      'SET_CURRENT_PAGE',
      'CLEAR_SEARCH_DATA',
      'SET_CURRENT_PAGE',
    ]),
    handleSearchSolders () {
      this.CLEAR_SEARCH_DATA()
      this.SET_CURRENT_PAGE(1)
      this.currentPage = 1
      this.searchDocuments()
    },
    searchDocuments (local = false) {
      if (
        this.searchSoldersCurrentView === 'middle' ||
        this.searchSoldersCurrentView === 'card'
      ) {
        this.solderFotosController.abort()
      }
      this.findDocuments({
        query: local ? this.SolderSearchFormLocal.getFindDocumentsRequestQuery() : this.SolderSearchForm.getFindDocumentsRequestQuery(),
        count: this.searchSoldersCount,
        offset: this.searchSoldersOffset,
        type: 'solders'
      })
        .then(() => {
          if (
            this.searchSoldersCurrentView === 'middle' ||
            this.searchSoldersCurrentView === 'card'
          ) {
            this.downloadSoldersListFotos()
          }
          if (local === false) {
            const SolderSearchFormCloneObj = deapCloning(this.SolderSearchForm)
            this.SolderSearchFormLocal = Object.assign(this.SolderSearchFormLocal, SolderSearchFormCloneObj)
          }
        })
    }
  },
  created () {
    const SolderSearchFormCloneObj = deapCloning(this.SolderSearchForm)
    this.SolderSearchFormLocal = Object.assign(this.SolderSearchFormLocal, SolderSearchFormCloneObj)
  }
}
</script>

<style scoped lang="sass">
</style>

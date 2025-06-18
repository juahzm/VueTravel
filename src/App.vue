<template>
  <NavMenu />
  <router-view :destinations="destinations" :addFor="addForfait" :deleteFor="deleteForfait"
    :updateFor="updateForfait" />
  <MainFooter />
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'
import MainFooter from '@/components/MainFooter.vue'
// import place from '@/place.json'

import ForfaitDataService from '@/services/ForfaitDataService'
export default {
  components: {
    NavMenu,
    MainFooter
  },
  mounted () {
    ForfaitDataService.getAll()
      .then(response => {
        this.destinations = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  data () {
    return {
      destinations: [],
      forfait: {}
    }
  },
  methods: {
    addForfait (forfait) {
      this.destinations.push(forfait)
    },
    updateForfait (index, data) {
      this.destinations[index] = data
    },
    deleteForfait (id) {
      ForfaitDataService.delete(id)
        .then((response) => {
          this.destinations = this.destinations.filter(item => item.id !== id)
        })
        .catch((e) => {
          this.message = e.response.data.message
        })
    }
  }

}
</script>

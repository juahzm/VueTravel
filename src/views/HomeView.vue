<template>
  <div class="max-w-[1000px] mx-auto">
    <MainHeader :onClick="toogleShowpackage" />
    <AddPackage v-if="showAddPackage" :addFor="addFor" />
    <SinglePackage :destinations="destinations" :deleteFor="deleteFor" />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import AddPackage from '@/components/AddPackage.vue'
import SinglePackage from '@/components/SinglePackage.vue'

export default {
  props: ['destinations', 'addFor', 'deleteFor', 'updateFor'],
  components: {
    MainHeader,
    AddPackage,
    SinglePackage
  },
  data () {
    return {
      showAddPackage: false
    }
  },
  methods: {
    toogleShowpackage () {
      this.showAddPackage = !this.showAddPackage
    }
  }

}
</script>

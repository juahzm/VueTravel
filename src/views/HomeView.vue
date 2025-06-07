<template>
 <MainHeader :onClick="toogleShowpackage"/>
 <AddPackage v-if="showAddPackage"/>
 <SinglePackage :destinations="destinations"/>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import AddPackage from '@/components/AddPackage.vue'
import SinglePackage from '@/components/SinglePackage.vue'
export default {
  props: ['destinations'],
  components: {
    MainHeader,
    AddPackage,
    SinglePackage
  },
  data () {
    return {
      showAddPackage: true
    }
  },
  methods: {
    toogleShowpackage () {
      this.showAddPackage = !this.showAddPackage
    }
  }
}
</script>

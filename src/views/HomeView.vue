<template>
<div class="max-w-[1000px] mx-auto">
 <MainHeader :onClick="toogleShowpackage"/>
 <AddPackage v-if="showAddPackage"/>
 <SinglePackage :destinations="destinations" :remove="removePackage"
 />
 </div>
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
      showAddPackage: false
    }
  },
  methods: {
    toogleShowpackage () {
      this.showAddPackage = !this.showAddPackage
    },
    removePackage (id) {
      delete this.destinations.id
    }
  }
}
</script>

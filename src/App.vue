<template>
<NavMenu/>
<router-view
:destinations="destinations"
/>
<MainFooter/>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'
import MainFooter from '@/components/MainFooter.vue'
import place from '@/place.json'
export default {
  components: {
    NavMenu,
    MainFooter
  },
  data () {
    return {
      destinations: place
    }
  }
}
</script>

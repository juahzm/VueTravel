<template>
<NavMenu/>
<router-view/>
<MainFooter/>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
  components: {
    NavMenu,
    MainFooter
  }
}
</script>

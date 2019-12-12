<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <TopBar @toggleMenu="toggleDrawer"/>
    </q-header>
    <MenuDrawer :drawerState="drawerOpen" @toggleDrawer="toggleDrawer"/>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import TopBar from 'components/layout/TopBar'
import MenuDrawer from 'components/layout/MenuDrawer'

export default {
  name: 'MyLayout',
  components: { TopBar, MenuDrawer },
  data () {
    return {
      drawerOpen: false
    }
  },
  methods: {
    toggleDrawer (val) {
      const { mobile } = this.$q.platform.is
      if (mobile) {
        this.drawerOpen = val || !this.drawerOpen
      } else {
        this.drawerOpen = false
      }
    }
  }
}
</script>

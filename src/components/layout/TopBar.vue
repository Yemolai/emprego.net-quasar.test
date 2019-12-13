<template>
  <q-header>
    <q-toolbar class="lt-sm bg-secondary text-dark q-py-md">
      <q-img class="logo-image q-mr-sm q-ml-md" src="statics/images/logo.png" />
      <q-space/>
      <q-btn
          flat
          dense
          round
          class="lt-sm q-mr-sm"
          icon="menu"
          aria-label="Menu"
          @click="toggleTopBar"
        />
    </q-toolbar>
    <div class="gt-xs bg-transparent">
      <q-toolbar class="bg-secondary text-dark q-py-md">
        <q-img class="logo-image q-mr-sm" src="statics/images/logo.png" />
        <q-separator spaced inset vertical/>
        <span class="text-uppercase user-name">
          Nome do candidato
        </span>
        <q-space/>
        <TopBarMenuItem to="/messages" :counter="messages">
          Mensagens
        </TopBarMenuItem>
        <TopBarMenuItem to="/calendar" :counter="calendar">
          Agenda
        </TopBarMenuItem>
        <TopBarMenuItem to="/notifications" :counter="notifications">
          Notificações
        </TopBarMenuItem>
        <q-separator spaced inset vertical/>
        <UserDropDownMenu/>
      </q-toolbar>
      <q-toolbar class="bg-primary text-white q-py-md q-px-lg gt-xs row justify-around">
        <TopBarMenuItem selected>RESUMO</TopBarMenuItem>
        <TopBarMenuItem>VAGAS INSCRITAS</TopBarMenuItem>
        <TopBarMenuItem>VAGAS PRA VOCÊ</TopBarMenuItem>
        <TopBarMenuItem>MEUS CURRÍCULOS</TopBarMenuItem>
        <TopBarMenuItem>CLASSIFICADOS</TopBarMenuItem>
        <TopBarMenuItem>BUSCAR NOVAS VAGAS</TopBarMenuItem>
      </q-toolbar>
    </div>
  </q-header>
</template>

<script>
import { QHeader, QToolbar, QBtn, QImg } from 'quasar'
import TopBarMenuItem from 'components/layout/TopBarMenuItem'
import UserDropDownMenu from 'components/layout/UserDropDownMenu'

export default {
  name: 'TopBar',
  components: {
    QHeader,
    QToolbar,
    QBtn,
    QImg,
    TopBarMenuItem,
    UserDropDownMenu
  },
  props: {
    drawerState: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      messages: 0,
      calendar: 0,
      notifications: 5
    }
  },
  methods: {
    toggleTopBar () {
      this.$emit('toggleMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
.logo-image {
  min-width: 192px;
  height: auto;
  width: auto;
}
</style>

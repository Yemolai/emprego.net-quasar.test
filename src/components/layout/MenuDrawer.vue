<template>
  <q-drawer
      class="lt-sm"
      v-model="isDrawerOpen"
      bordered
      side="right"
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
</template>

<script>
import {
  QDrawer,
  QList,
  QItemLabel,
  QItem,
  QItemSection,
  QIcon
} from 'quasar'
export default {
  name: 'MenuDrawer',
  components: {
    QDrawer,
    QList,
    QItemLabel,
    QItem,
    QItemSection,
    QIcon
  },
  props: {
    drawerState: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isDrawerOpen: {
      get () {
        return this.drawerState
      },
      set (val) {
        this.$emit('toggleDrawer', val)
      }
    }
  }
}
</script>

<template>
  <q-btn :class="itemClasses" flat dense style="MenuItemStyle">
    <q-badge
      class="round-badge"
      v-if="counterValue"
      color="red"
      floating>
      &nbsp;
    </q-badge>
    <slot>
      <span>Menu Item</span>
    </slot>
  </q-btn>
</template>

<script>
export default {
  name: 'TopBarMenuItem',
  props: {
    to: String,
    counter: Number,
    selected: Boolean
  },
  computed: {
    counterValue () {
      const { counter } = this
      return counter ? Number(counter) : undefined
    },
    itemClasses () {
      const { selected = false } = this
      return {
        'top-bar-menu-item': true,
        selected
      }
    }
  },
  methods: {
    navigate () {
      const { to: target = null } = this
      if (!target) return
      this.$router.push(target)
    }
  }
}
</script>
<style lang="scss" scoped>
.top-bar-menu-item {
  border: none;
  &.selected {
    border-radius: 0;
    border-bottom: 0.25em solid $warning;
  }
}
.round-badge {
  border-radius: 50%;
  width: 12px;
  height: 12px;
}
</style>

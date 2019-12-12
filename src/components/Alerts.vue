<template>
  <div class="alerts-wrapper">
    <template v-for="(alert, key) in list">
      <q-banner inline-actions rounded :class="bannerClass(alert)" :key="key">
        {{ alert.message }}
        <template v-slot:action>
          <q-btn outline rounded :label="alert.action" />
        </template>
      </q-banner>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Alerts',
  props: {
    list: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

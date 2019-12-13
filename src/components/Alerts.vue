<template>
  <div class="alerts-wrapper text-white">
    <template v-for="(alert, key) in list">
      <q-banner inline-actions rounded :class="bannerClass(alert)" :key="key">
        <span class="text-h4 q-my-sm">
          {{ alert.icon }}
        </span>
        <span class="text-h5">{{ alert.message }}</span>
        <template v-slot:action>
          <q-btn outline rounded :label="alert.actionLabel" />
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
  },
  methods: {
    bannerClass (alert) {
      const color = alert.type === 'invite' ? 'warning' : 'primary'
      const textColor = alert.type === 'invite' ? 'dark' : 'white'
      return [
        'q-ma-md',
        'q-pa-md',
        `bg-${color}`,
        `text-${textColor}`
      ]
    }
  }
}
</script>

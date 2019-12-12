<template>
  <q-page padding>
    <Alerts :list="alerts" />
  </q-page>
</template>

<script>
import Alerts from 'components/Alerts'
export default {
  name: 'CandidateHome',
  components: { Alerts },
  data () {
    return {
      alerts: []
    }
  }
}
</script>

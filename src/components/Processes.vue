<template>
  <div>
    <template v-for="(process, key) in list">
      <q-banner inline-actions :key="key" :class="bannerClass(process)" rounded>
        <div>
          <p>
            {{ timePassed(process.startedAt) }}
            - {{ process.company }}
            - {{ process.location }}
          </p>
          <p>
            <span class="text-h4">
              {{ process.position }}
            </span>
            <span>
              {{ process.openCount }}
              vaga{{ process.openCount === 1 ? '' : 's' }}
            </span>
          </p>
        </div>
        <template v-slot:action>
          <div :class="statusClass(process)">
            <div class="q-mb-md">{{ statusText(process) }}</div>
            <div class="text-center" style="width: 100%;">
              <q-btn v-if="process.status === 'interview'" outline rounded label="Responder agora!"/>
            </div>
          </div>
        </template>
      </q-banner>
    </template>
  </div>
</template>

<script>
import moment from 'moment'

moment.locale('pt-br')

const statusColorEnum = {
  pending: 'warning',
  scheduled: 'info',
  closed: 'danger',
  interview: 'white'
}

const statusTextEnum = {
  pending: 'Aguardando confirmação',
  scheduled: 'Entrevista marcada!',
  closed: 'Vaga encerrada',
  interview: 'Novo convite para entrevista!'
}

export default {
  name: 'Processes',
  props: {
    list: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    timePassed (dateObj) {
      return moment(dateObj).fromNow()
    },
    getColor ({ status = false }) {
      return status === 'interview'
        ? 'primary'
        : 'secondary'
    },
    getTextColor ({ status = false }) {
      return status === 'interview'
        ? 'white'
        : 'dark'
    },
    getStatusColor ({ status = false }) {
      return statusColorEnum[status] || 'dark'
    },
    statusClass (process) {
      const statusTextColor = this.getStatusColor(process)
      return [
        'q-pa-md',
        'q-ma-md',
        'text-h5',
        'column',
        'justify-center',
        `text-${statusTextColor}`
      ]
    },
    statusText ({ status }) {
      return statusTextEnum[status] || 'dark'
    },
    bannerClass (process) {
      const color = this.getColor(process)
      const textColor = this.getTextColor(process)
      return [
        'q-px-md',
        'q-ma-md',
        'q-py-sm',
        `bg-${color}`,
        `text-${textColor}`
      ]
    }
  }
}
</script>

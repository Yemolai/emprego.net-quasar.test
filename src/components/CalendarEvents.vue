<template>
  <div>
    <template v-for="(event, key) in list">
      <q-list class="event-list q-my-lg" :key="key" bordered separator>
        <q-item :class="headerClass(event)">
          <q-item-section avatar>
            <q-icon color="white" name="calendar_today"/>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-bold" lines="1">
              {{ descriptiveDate(event).split(' ').shift() }} &middot; Entrevista
            </q-item-label>
            <q-item-label lines="1">
              {{ startTime(event) }} - {{ endTime(event) }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-py-lg">
          <q-item-section>
            <q-item-label class="text-bold">
              {{ event.company }}
            </q-item-label>
            <q-item-label class="text-bold text-primary">
              <a href="#">Entrevista Remota</a>
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-py-lg">
          <q-item-section class="text-bold">
            <q-item-label>
              <a href="#" class="text-warning">
                Comunicar atraso
              </a>
            </q-item-label>
            <q-item-label>
              <a href="#" class="text-negative">
                Cancelar Entrevista
              </a>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </template>
  </div>
</template>

<script>
import moment from 'moment'

moment.locale('pt-br')

export default {
  name: 'CalendarEvents',
  props: {
    list: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    startTime (event) {
      return moment(event.date).format('HH:mm')
    },
    endTime (event) {
      return moment(event.date + event.duration).format('HH:mm')
    },
    descriptiveDate (event) {
      return moment(event.date).calendar()
    },
    isToday (event) {
      const startOfDay = moment().startOf('day')
      const endOfDay = moment().endOf('day')
      return moment(event.date).isBetween(startOfDay, endOfDay)
    },
    isBeforeToday (event) {
      const startOfDay = moment().startOf('day')
      return moment(event.date).isBefore(startOfDay)
    },
    isAfterToday (event) {
      const endOfDay = moment().endOf('day')
      return moment(event.date).isAfter(endOfDay)
    },
    headerClass (event) {
      const before = this.isBeforeToday(event)
      const today = this.isToday(event)
      const after = this.isAfterToday(event)
      const bgColor = today
        ? 'positive'
        : after
          ? 'warning'
          : before
            ? 'negative'
            : 'primary'
      return [
        'q-py-md',
        'text-white',
        `bg-${bgColor}`
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.event-list {
  border-radius: 15px;
}
</style>

<template>
  <q-page padding>
    <div class="row q-mx-md">
      <div class="col-xs-12 col-sm-8 col-md-9">
        <Alerts :list="alerts" />
        <h2 class="text-h2 q-ml-md q-mb-none">
          Processos em andamento
        </h2>
        <Processes :list="ongoingProcesses" />
      </div>
      <div class="gt-xs col-sm-4 col-md-3">
        <CurriculumAlert/>
        <CalendarEvents :list="events" />
      </div>
    </div>
  </q-page>
</template>

<script>
import Alerts from 'components/Alerts'
import CalendarEvents from 'components/CalendarEvents'
import CurriculumAlert from 'components/CurriculumAlert'
import Processes from 'components/Processes'
import moment from 'moment'

const oneMinute = 60 * 1000
const oneDay = 24 * 60 * oneMinute

export default {
  name: 'CandidateHome',
  components: { Alerts, CalendarEvents, CurriculumAlert, Processes },
  data () {
    return {
      alerts: [
        {
          type: `invite`,
          icon: `👀`,
          message: `Você foi convidado para participar de um processo seletivo!`,
          actionLabel: `Ver vaga`
        },
        {
          type: `interview`,
          icon: `👏`,
          message: `Parabéns, você recebeu um convite para uma nova entrevista!`,
          actionLabel: `Responder agora!`
        }
      ],
      ongoingProcesses: [
        {
          startedAt: new Date(Date.now() - oneDay),
          company: 'Codus Tecnologia',
          location: 'São Paulo - SP',
          position: 'UX Designer Pleno',
          openCount: 2,
          status: 'interview',
          interviewId: Math.random().toString(36).slice(2)
        }, {
          startedAt: new Date(Date.now() - oneDay),
          company: 'Codus Tecnologia',
          location: 'São Paulo - SP',
          position: 'UX Designer Pleno',
          openCount: 2,
          status: 'closed'
        }, {
          startedAt: new Date(Date.now() - oneDay),
          company: 'Codus Tecnologia',
          location: 'São Paulo - SP',
          position: 'UX Designer Pleno',
          openCount: 2,
          status: 'scheduled'
        }, {
          startedAt: new Date(Date.now() - oneDay),
          company: 'Codus Tecnologia',
          location: 'São Paulo - SP',
          position: 'UX Designer Pleno',
          openCount: 2,
          status: 'pending'
        }
      ],
      events: [
        {
          type: 'interview',
          id: Math.random().toString(36).slice(2),
          date: moment().set('hours', 15).set('minutes', 40),
          duration: 30 * oneMinute,
          title: 'Vendedor de veículos semi novos',
          company: 'Motor Sport Veículos'
        }, {
          type: 'interview',
          id: Math.random().toString(36).slice(2),
          date: moment().set('hours', 15).set('minutes', 40).add(1, 'days'),
          duration: 30 * oneMinute,
          title: 'Vendedor de veículos semi novos',
          company: 'Motor Sport Veículos'
        }
      ]
    }
  }
}
</script>

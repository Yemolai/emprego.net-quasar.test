<template>
  <q-page padding>
    <Alerts :list="alerts" />
    <Processes :list="ongoingProcesses" />
  </q-page>
</template>

<script>
import Alerts from 'components/Alerts'
import Processes from 'components/Processes'

const oneDay = 24 * 60 * 1000

export default {
  name: 'CandidateHome',
  components: { Alerts, Processes },
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
      ]
    }
  }
}
</script>

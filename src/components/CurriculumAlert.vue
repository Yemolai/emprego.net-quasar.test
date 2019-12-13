<template>
  <div class="curriculum-alert bg-accent q-pa-lg q-ma-md text-white">
    <div class="close-button ripple">×</div>
    <p>Você ainda não preencheu o currículo.</p>
    <p>As empresas não vão te encontrar assim.</p>
    <q-btn push class="text-lowercase q-px-lg" color="primary">
      completar currículo
    </q-btn>
  </div>
</template>

<script>
export default {
  name: 'CurriculumAlert'
}
</script>

<style lang="scss" scoped>
.curriculum-alert {
  border-radius: 15px;
  position: relative;
  p {
    margin-top: 2px;
    margin-bottom: 2px;
  }
  &>.close-button {
    position: absolute;
    top: 1px;
    right: 12px;
    font-size: 28px;
    cursor: pointer;
  }
}
</style>

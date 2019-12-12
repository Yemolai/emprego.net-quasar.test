<template>
  <q-btn-dropdown flat color="dark">
    <template v-slot:label>
      <div class="row items-center wrap">
        <q-avatar class="q-mr-sm" size="sm" color="#C4C4C4">
          <q-img :src="user.avatarURL" />
        </q-avatar>
        <span class="text-uppercase">
          {{ user.username }}
        </span>
      </div>
    </template>
    <q-list>

    </q-list>
  </q-btn-dropdown>
</template>

<script>
export default {
  name: 'UserDropDownMenu',
  computed: {
    user () {
      const profile = this.$store.getters['user/profile']
      return profile
    }
  }
}
</script>

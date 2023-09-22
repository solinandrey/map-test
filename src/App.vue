<template>
  <v-app class="h-screen">
    <transition mode="out-in">
      <v-alert v-if="error" :text="$t('error')" type="error" class="alert rounded-0"></v-alert>
    </transition>
    
    <Navigation style="height: 15%" />
    <v-main style="height: 85%">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Navigation from './components/Navigation.vue';
import {mapState} from 'vuex'

export default {
  components: {
    Navigation
  },
  computed: {
    ...mapState(['error'])
  }
}
</script>

<style lang="scss" scoped>
.alert {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  &.v-enter-active,
  &.v-leave-active {
    transition: transform 0.5s ease;
  }

  &.v-enter-from,
  &.v-leave-to {
    transform: translateY(-100%);
  }
}


</style>

<template>
  <v-app class="h-screen">
    <Navigation style="height: 15%" />
    <v-main style="height: 85%">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Navigation from './components/Navigation.vue';
</script>

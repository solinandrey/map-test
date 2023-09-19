<template>
  <v-container fluid class="pa-0 fill-height" fill-height>
    <v-row justify="stretch" no-gutters class="fill-height">
      <v-col cols="4">
        <MarkersList :markers="markers"/>
      </v-col>
      <v-col cols="8">
        <MapContainer :markers="markers"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import MarkersList from "../components/MarkersList.vue";
import MapContainer from "../components/MapContainer.vue";
import {mapState} from "vuex";
export default {
  data: () => ({
    mapContainer: null,
  }),
  components: {
    MarkersList,
    MapContainer,
  },
  computed: {
    ...mapState(['markers'])
  }
};
</script>

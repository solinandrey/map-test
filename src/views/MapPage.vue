<template>
  <v-container fluid>
    <v-row justify="stretch" no-gutters>
      <MarkersList />
      <MapContainer />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import MarkersList from "../components/MarkersList.vue";
import MapContainer from "../components/MapContainer.vue";
export default {
  data: () => ({
    mapContainer: null,
  }),
  components: {
    MarkersList,
    MapContainer
  }
};
</script>

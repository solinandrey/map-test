<template>
  <v-container fluid class="pa-0 fill-height" fill-height>
    <v-row justify="stretch" no-gutters class="fill-height">
      <v-col cols="4">
        <MarkersList :markers="markers" @recenterMap="recenterMap"/>
      </v-col>
      <v-col cols="8">
        <MapContainer :markers="markers" :center="mapCenter"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import MarkersList from "../components/MarkersList.vue";
import MapContainer from "../components/MapContainer.vue";
import {mapState} from "vuex";
import { Marker } from '@/types';
export default {
  data: () => ({
    mapCenter: [0,0]
  }),
  components: {
    MarkersList,
    MapContainer,
  },
  computed: {
    ...mapState(['markers'])
  },
  methods: {
    recenterMap(marker: Marker) {
      console.log(marker)
      this.mapCenter = [marker.lat, marker.lng]
    }
  }
};
</script>

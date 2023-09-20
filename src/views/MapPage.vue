<template>
  <v-container fluid class="pa-0 fill-height" fill-height>
    <v-row justify="stretch" no-gutters class="fill-height">
      <v-col cols="4">
        <MarkersList :markers="markers" @onAddressClick="onAddressClick" />
      </v-col>
      <v-col cols="8">
        <MapContainer
          :markers="markers"
          :center="mapCenter"
          @onMarkerClick="onMarkerClick"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import MarkersList from "../components/MarkersList.vue";
import MapContainer from "../components/MapContainer.vue";
import { mapState, mapMutations, mapActions } from "vuex";
import { Marker } from "@/types";
export default {
  data: () => ({}),
  components: {
    MarkersList,
    MapContainer,
  },
  computed: {
    ...mapState(["markers", "mapCenter"]),
  },
  methods: {
    ...mapMutations(["setMapCenter", "setActiveMarker"]),
    ...mapActions(["getAddress"]),
    onMarkerClick(id: number) {
      this.activateMarker(id);
    },
    onAddressClick(marker: Marker) {
      this.setMapCenter({ ...marker });
      this.activateMarker(marker.id);
    },
    activateMarker(id: number) {
      this.$router.push({ ...this.$route, query: { id: id } });
      this.setActiveMarker(id);
    },
  },
  beforeMount() {
    if (localStorage.markers) {
      const markers = JSON.parse(localStorage.markers);
      markers.forEach((el: Marker) => this.getAddress(el));
    
      const id = Number(this.$route.query.id);
      if (id) {
        this.setMapCenter(markers.find((el: Marker) => el.id === id))
        this.setActiveMarker(id);
      }
    }
  },
};
</script>

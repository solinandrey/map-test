<template>
  <v-container fluid class="pa-0 fill-height" fill-height>
    <v-row justify="stretch" no-gutters class="fill-height flex-sm-row flex-column-reverse flex-nowrap">
      <v-col class="v-col-sm-4 v-col-12 h-sm-100 addresses" style="height:100%;overflow:scroll;">
        <MarkersList :markers="markers" @onAddressClick="onAddressClick" />
      </v-col>
      <v-col class="v-col-sm-8 v-col-12 h-sm-100 markers">
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
import Backend from '../plugins/backend';
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
  async beforeMount() {
    const storageMarkers = await Backend.getMarkersFromStorage();
    if (storageMarkers && !this.markers.length) {
      storageMarkers.forEach((el: Marker) => this.getAddress(el));
    
      const id = Number(this.$route.query.id);
      if (id) {
        this.setMapCenter(storageMarkers.find((el: Marker) => el.id === id))
        this.setActiveMarker(id);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
  @media only screen and (max-width: 600px) {
    .markers {
      max-height: 75%;
    }

    .addresses {
      max-height: 25%;
    }
  }

</style>

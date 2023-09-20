<template>
  <v-container
    style="height: 100%; width: 100%"
    class="map-container pa-0"
    :class="{ 'adding-mode': addingMode }"
    ref="mapContainer"
  >
    <l-map
      ref="map"
      :zoom="zoom"
      :center="center"
      :use-global-leaflet="false"
      @click="newMarker"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker
        v-for="(marker, index) in markers"
        :key="'marker' + index"
        :lat-lng="marker"
        @click="onMarkerClick(marker.id)"
      ></l-marker>
    </l-map>
    <v-btn
      :icon="addingMode ? 'mdi-close' : 'mdi-plus'"
      size="large"
      class="add-button"
      @click="toggleMode"
    ></v-btn>
    <v-tooltip v-model="addingMode" class="tooltip" :offset="100" contained max-width="max-content">
      <span>Добавьте маркер</span>
    </v-tooltip>
  </v-container>
</template>

<script>
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import { mapMutations, mapActions } from "vuex";

export default {
  data: () => ({
    zoom: 10,
    addingMode: false,
  }),
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  props: {
    markers: Array,
    center: Array
  },
  methods: {
    ...mapMutations(["addMarker", "setActiveMarker"]),
    ...mapActions(["getAddress"]),
    newMarker(event) {
      if (!this.addingMode) return
      this.getAddress(event.latlng);
    },
    onMarkerClick(id) {
      this.$emit('onMarkerClick', id);
    },
    toggleMode() {
      this.addingMode = !this.addingMode;
    },
  },
  computed: {
  }
};
</script>

<style lang="scss" scoped>
.map-container {
  position: relative;
  box-sizing: border-box;
}

.tooltip {
  display: flex;
  justify-content: center;
  padding-top: 50px;
}

.add-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}
</style>
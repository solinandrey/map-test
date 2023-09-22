<template>
  <v-list lines="one" class="fill-height d-flex flex-column justify-space-between">
    <v-list-subheader :title="$t('markers')" class="markers__subheader" />
    <v-container class="pa-0 overflow-auto" style="height: 95%">
      <v-list-item
        v-for="point in markers"
        :key="point.lat + point.lng"
        :title="point.address"
        :subtitle="`${point.lat}, ${point.lng}`"
        class="markers__item"
        :class="{ active: point.id === activeMarker }"
        @click="onAddressClick(point)"
      ></v-list-item>
    </v-container>
  </v-list>
</template>

<script lang="ts">
import { Marker } from "../types";
import { mapState, mapMutations } from "vuex";
export default {
  data: () => ({}),
  props: {
    markers: Array<Marker>,
  },
  computed: {
    ...mapState(["activeMarker"]),
  },
  methods: {
    ...mapMutations(["setActiveMarker"]),
    onAddressClick(marker: Marker) {
      this.$emit("onAddressClick", marker);
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.markers {
  &__subheader {
    font-size: 20px;
  }

  &__item {
    background: transparent;
    transition: background-color 0.2s ease-in-out;
    &.active {
      background: #aaaaaa;
      color: #fff;
    }
  }
}
</style>
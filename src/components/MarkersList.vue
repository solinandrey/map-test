<template>
  <v-list lines="one" class="fill-height overflow-scroll">
    <v-list-subheader title="Маркеры:" class="markers__subheader"/>
    <v-list-item
      v-for="point in markers"
      :key="point.lat + point.lng"
      :title="point.address"
      :subtitle="`${point.lat}, ${point.lng}`"
      class="markers__item"
      :class="{active : point.id === activeMarker}"
      @click="onAddressClick(point)"
    ></v-list-item>
  </v-list>
</template>

<script lang="ts">
import {Marker} from '../types';
import {mapState, mapMutations} from 'vuex';
export default {
  data: () => ({
  }),
  props: {
    markers: Array<Marker>,
  },
  computed: {
    ...mapState(['activeMarker'])
  },
  methods: {
    ...mapMutations(['setActiveMarker']),
    onAddressClick(marker: Marker) {
      this.$emit('onAddressClick', marker);
    }
  }
};
</script>

<style lang="scss" scoped>

.markers {
  &__subheader {
    font-size: 20px;
  }

  &__item {
    background: transparent;
    transition: background-color .2s ease-in-out;
    &.active {
      background: #aaaaaa;
      color: #fff;
    }
  }
}

</style>
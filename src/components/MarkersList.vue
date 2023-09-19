<template>
  <v-list lines="one">
    <v-list-subheader title="Маркеры:" class="markers__subheader"/>
    <v-list-item
      v-for="point in markers"
      :key="point.lat + point.lng"
      :title="point.address"
      :subtitle="`${point.lat}, ${point.lng}`"
    ></v-list-item>
  </v-list>
</template>

<script lang="ts">
import {Marker} from '../types'
export default {
  data: () => ({
  }),
  props: {
    markers: Array<Marker>
  }
};
</script>

<style lang="scss" scoped>

.markers {
  &__subheader {
    font-size: 20px;
  }
}

</style>
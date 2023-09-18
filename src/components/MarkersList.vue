<template>
  <v-list lines="one">
    <v-list-subheader title="Маркеры:" class="markers__subheader"/>
    <v-list-item
      v-for="point in list"
      :key="point.label"
      :title="point.label"
      :subtitle="`${point.alt}, ${point.lat}`"
    ></v-list-item>
  </v-list>
</template>

<script lang="ts">
export default {
  data: () => ({
    list: [
      { label: "Marker N1", alt: "58.29384", lat: "46.2344" },
      { label: "Marker N2", alt: "58.29384", lat: "46.2344" },
      { label: "Marker N3", alt: "58.29384", lat: "46.2344" },
      { label: "Marker N4", alt: "58.29384", lat: "46.2344" },
    ],
  }),
};
</script>

<style lang="scss" scoped>

.markers {
  &__subheader {
    font-size: 20px;
  }
}

</style>
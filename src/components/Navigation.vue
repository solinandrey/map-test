<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 text-basil">
        Тестовое задание SquareGPS
      </h1>
    </v-card-title>

    <v-tabs v-model="tab" class="tabs">
      <v-tab
        v-for="item in items"
        :key="item.label"
        :text="item.label"
        :to="item.link"
        class="tabs__item"
      >
      </v-tab>
    </v-tabs>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      tab: "Appetizers",
      items: [
        { label: "О задании", link: "/" },
        { label: "Карта", link: "/map" },
      ],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>
<style lang="scss">
/* Helper classes */

.tabs {
  .tabs__item{
    color: #ffffff;
  }
}
.bg-basil {
  background-color: #101010 !important;
}
.text-basil {
  color: #ffffff !important;
}
</style>
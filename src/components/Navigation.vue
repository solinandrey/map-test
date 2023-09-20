<template>
  <v-card color="basil" class="justify-space-between d-flex flex-column" style="">
    <v-card-title
      class="text-center font-weight-bold text-white justify-center py-6 text-h6 text-sm-h4 text-md-h3"
    >
      Тестовое задание SquareGPS
    </v-card-title>

    <v-tabs v-model="tab" class="tabs">
      <v-tab
        v-for="item in items"
        :key="item.label"
        :text="item.label"
        :to="item.link"
        :value="item.name"
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
      tab: "",
      items: [
        { label: "О задании", link: "/", name: "About" },
        { label: "Карта", link: "/map", name: "Map" },
      ],
    };
  },
  computed: {
    activeTab() {
      return this.$route.name;
    },
  },
};
</script>
<style lang="scss">
/* Helper classes */

.tabs {
  .tabs__item {
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
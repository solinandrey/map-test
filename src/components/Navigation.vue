<template>
  <v-card
    color="basil"
    class="justify-space-between d-flex flex-column rounded-0"
  >
    <v-card-title
      class="text-center font-weight-bold text-white justify-center pt-10 text-h6 text-sm-h4 text-md-h3"
    >
      {{ $t("title") }}
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
    <div class="language-selector">
      <LanguageSwitch />
    </div>
  </v-card>
</template>
<script lang="ts">
import LanguageSwitch from "../components/LanguageSwitch.vue";
export default {
  data() {
    return {
      tab: "",
      items: [
        { label: this.$t("about"), link: "/", name: "About" },
        { label: this.$t("map"), link: "/map", name: "Map" },
      ],
    };
  },
  components: {
    LanguageSwitch,
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

.language-selector {
  position: absolute;
  top: 20px;
  right: 20px;
}

@media only screen and (max-width: 600px) {
  .tabs__item {
    width: 50%;
  }

  .language-selector {
  position: absolute;
  top: 10px;
  right: 10px;
}
}
.bg-basil {
  background-color: #101010 !important;
}
.text-basil {
  color: #ffffff !important;
}
</style>
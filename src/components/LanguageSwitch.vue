<template>
  <div class="text-center">
    <v-menu open-on-hover>
      <template v-slot:activator="{props}">
        <v-btn icon="mdi-translate-variant" color="white" v-bind="props"></v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in languages" :key="index" @click="selectLanguage(item.value)">
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      languages: [
        { label: this.$t("language.ru"), value: 'ru' },
        { label: this.$t("language.en"), value: 'en' },
      ],
    };
  },
  methods: {
    selectLanguage(value: string) {
      this.$i18n.locale = value;
    }
  }
};
</script>
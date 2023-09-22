<template>
  <div class="about pa-4" v-html="processedHtml"></div>
</template>

<script>
import html from "../assets/task.html?raw";
import htmlEng from "../assets/taskEng.html?raw"
import image from '../assets/image1.png';
export default {
  computed: {
    taskBody() {
      return html;
    },
    processedHtml() {
      let el = new DOMParser().parseFromString(this.$i18n.locale === 'ru' ? html : htmlEng, "text/html");
      let img = el.querySelector("#image");
      img.src = image
      return el.documentElement.innerHTML;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

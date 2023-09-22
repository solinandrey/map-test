<template>
  <div class="about pa-4" v-html="processedHtml"></div>
</template>

<script>
import html from "../assets/task.html?raw";
import image from '../assets/image1.png';
export default {
  computed: {
    taskBody() {
      console.log(new DOMParser().parseFromString(html, "text/html"))
      return html;
    },
    processedHtml() {
      let el = new DOMParser().parseFromString(html, "text/html");
      let img = el.querySelector("#image");
      img.src = image
      return el.documentElement.innerHTML;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

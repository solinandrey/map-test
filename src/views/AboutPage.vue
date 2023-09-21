<template>
  <div class="about" v-html="taskBody"></div>
</template>

<script lang="ts">
import html from '../assets/task.html?raw'
export default {
  data: () => ({
    task: ''
  }),
  computed: {
    taskBody() {
      return html
    }
  },
  mounted() {
    this.task = fetch('../assets/task.html').then(res => res.json()).then(data => console.log(data))
  }
}
</script>

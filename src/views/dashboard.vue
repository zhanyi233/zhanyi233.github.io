<template>
  <div class="wrapper">
    <article class="markdown-body" v-html="Test"></article>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { html as Test } from "../../public/json/css-named.md";
</script>

<style lang="scss" scoped>
</style>

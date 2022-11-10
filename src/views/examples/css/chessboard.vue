<template>
  <v-message title="温馨提示" desc="练手的样式，看一看就好啦～"></v-message>
  <code-example :component="ChessboardTemp" />
</template>

<script setup>
import ChessboardTemp from "./demo/chessboard-temp.vue";
</script>

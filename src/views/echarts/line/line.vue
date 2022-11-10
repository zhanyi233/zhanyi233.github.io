<template>
  <!-- 一级标题 -->
  <h2 class="component-h1">折线图</h2>
  <!-- BaseTable内容 -->
  <div class="component-block" v-for="item in comList" :key="item.component">
    <v-message :title="item.title" :desc="item.desc"></v-message>
    <code-example :component="item.component" />
  </div>
</template>

<script setup>
import BasicLine from "./demo/basic-line.vue";

const comList = [
  {
    title: "基本用法",
    desc: ["文字超出宽度截断，使用前请配置 width；", "当鼠标放置在轴线处显示全部内容；"],
    component: BasicLine,
  },
];

</script>

<style lang="scss" scoped>
.component-h1 {
  font-weight: 400;
  color: #1f2f3d;
  font-size: 20px;
}
</style>

<template>
  <!-- 一级标题 -->
  <h2 class="component-h1">自定义图表</h2>
  <!-- BaseTable内容 -->
  <div class="component-block" v-for="item in comList" :key="item.component">
    <v-message :title="item.title" :desc="item.desc"></v-message>
    <code-example :component="item.component" />
  </div>
</template>

<script setup>
import TangentialPolarBar from "./demo/tangential-polar-bar.vue";

const comList = [
  {
    title: "环形半圆",
    desc: [
      "极坐标系 + 柱状图",
    ],
    component: TangentialPolarBar,
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

<template>
  <!-- 一级标题 -->
  <h2 class="component-h1">饼图</h2>
  <!-- BaseTable内容 -->
  <div class="component-block" v-for="item in comList" :key="item.component">
    <v-message :title="item.title" :desc="item.desc"></v-message>
    <code-example :component="item.component" />
  </div>
</template>

<script setup>
import BasicPie from "./demo/basic-pie.vue";

const comList = [
  {
    title: "扇区放大",
    desc: [
      '扇区默认放大',
      '自定义中间文字'
    ],
    component: BasicPie,
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

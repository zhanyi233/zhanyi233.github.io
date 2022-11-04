<template>
  <!-- 一级标题 -->
  <h2 class="component-h1">折线图</h2>
  <!-- BaseTable内容 -->
  <div class="component-block" v-for="item in comList" :key="item.component">
    <h2>{{ item.title }}</h2>
    <div class="component-block--desc">{{ item.desc }}</div>
    <code-example :description="item.description" :component="item.component" />
  </div>
</template>

<script setup>
import BasicLine from "./demo/basic.vue";

const comList = [
  {
    title: "基本用法",
    desc: "1、文字超出宽度截断，使用前请配置 width；2、当鼠标放置在轴线处显示全部内容；",
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

.component-block {
  margin-top: 30px;

  h2 {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 16px;
  }

  .component-block--desc {
    margin: 10px 0 20px 0;
    font-size: 14px;
    color: #666;
  }
}
</style>

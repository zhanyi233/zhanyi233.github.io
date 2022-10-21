<template>
  <el-scrollbar class="sidebar">
    <div class="sidebar-groups">
      <div class="sidebar-group" v-for="item in menus" :key="item.value">
        <p>{{ item.label }}</p>
        <div
          class="sidebar-group__item"
          v-for="child in item.children"
          :key="child.value"
          :class="{'is-active': activeRoute === child.value}"
        >
          {{ child.label }}
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>

<script setup>
import { ref, onMounted } from "vue";

const activeRoute = ref("css-named");
const menus = ref([
  {
    label: "Css",
    value: "Css",
    children: [
      {
        label: '命名规范',
        value: 'css-named',
      },
    ],
  },
]);
</script>

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

const activeRoute = ref("1");
const menus = ref([
  {
    label: "Html",
    value: "Html",
  },
  {
    label: "Css",
    value: "Css",
  },
  {
    label: "JavaScript",
    value: "JavaScript",
    children: [
      {
        label: "JSON.parse 遇到转义字符",
        value: "1",
      },
      {
        label: "JavaScript单行代码",
        value: "2",
      },
    ],
  },
]);
</script>

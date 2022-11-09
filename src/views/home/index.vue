<template>
  <v-sidebar :active="activeRoute" :list="menus" @click="handleChangeMenu" />
  <div class="page-content">
    <div class="wrapper">
      <article class="markdown-body" v-html="html"></article>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import vSidebar from "../../components/sidebar.vue";
import mds from "./mds/index";

const html = ref(null);
const activeRoute = ref("CssNamed");
const menus = ref([
  {
    label: "Css",
    value: "Css",
    children: [
      {
        label: "命名规范",
        value: "CssNamed",
      },
    ],
  },
  {
    label: "JavaScript",
    value: "JavaScript",
    children: [
      {
        label: "JavaScript单行代码",
        value: "Js_1",
      },
    ],
  },
]);

const handleChangeMenu = ({ value }) => {
  activeRoute.value = value;
};

watch(
  () => activeRoute.value,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      html.value = mds[newVal];
    }
  },
  { immediate: true, deep: true }
);
</script>

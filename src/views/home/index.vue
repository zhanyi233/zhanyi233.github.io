<template>
  <v-header />
  <v-sidebar :active="activeRoute" :list="menus" @click="handleChangeMenu"/>
  <div class="page-content">
    <div class="wrapper">
      <article class="markdown-body" v-html="mds[activeRoute]"></article>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import vHeader from "../../components/header.vue";
import vSidebar from "../../components/sidebar.vue";
import mds from "./mds/index";

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
</script>

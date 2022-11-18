<template>
  <v-sidebar :active="activeRoute" :list="menus" @click="handleChangeMenu" />
  <div class="page-content">
    <div class="wrapper">
      <article class="markdown-body" v-html="html"></article>
    </div>
  </div>
</template>

<script setup>
import _ from 'lodash';
import { ref, watch, computed } from "vue";
import vSidebar from "../../components/sidebar.vue";
import mds from "./mds/index";
import { useRouter, useRoute } from "vue-router";

const Route = useRoute(); // 当前路由
const Router = useRouter();

const html = ref(null);

const activeRoute = computed(() => {
  const { md } = Route.query;
  if (!md) return 'CssNamed';
  return md;
});

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
  Router.push({
    name: Route.name,
    query: {
      md: value,
    },
  })
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

<style lang="scss" scoped>
.markdown-body {
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 20px 30px;
  box-sizing: border-box;
}
</style>
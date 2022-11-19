<template>
  <v-sidebar :active="activeRoute" :list="menus" @click="handleChangeMenu" />
  <div class="page-content">
    <div class="wrapper">
      <div class="markdown-title">{{ title }}</div>
      <article class="markdown-body" v-html="html"></article>
    </div>
  </div>
</template>

<script setup>
import _ from "lodash";
import { ref, watch, computed } from "vue";
import vSidebar from "../../components/sidebar.vue";
import mds from "./mds/index";
import { useRouter, useRoute } from "vue-router";
import { treeToFlat } from '../../utils/tree-store';

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

const Route = useRoute(); // 当前路由
const Router = useRouter();

const html = ref(null);

const activeRoute = computed(() => {
  const { md } = Route.query;
  if (!md) return "CssNamed";
  return md;
});

const title = computed(() => {
  const target = treeToFlat(menus.value).find(({ value }) => activeRoute.value === value);
  return target.label;
});

const handleChangeMenu = ({ value }) => {
  Router.push({
    name: Route.name,
    query: {
      md: value,
    },
  });
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
.page-content {
  padding-right: 20px;
  padding-bottom: 20px;

  .wrapper {
    padding-right: 0;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    box-sizing: border-box;

    .markdown-title {
      padding: 0 30px;
      height: 40px;
      margin: -1px -1px 0;
      line-height: 40px;
      border-bottom: 1px solid var(--border-color);
      background: #f6f8fa;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      border: 1px solid var(--border-color);
      color: #000;
    }

    .markdown-body {
      padding: 0 30px;
    }
  }
}
</style>

<template>
  <v-header />
  <v-sidebar :active="activeRoute" :list="menus" />
  <div class="page-content">
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import vHeader from "../../components/header.vue";
import vSidebar from "../../components/sidebar.vue";
import { useRouter } from "vue-router";

const Router = useRouter();

const activeRoute = ref("");
const menus = ref([]);

const getRoutes = () => {
  const target = Router.options.routes.filter(
    ({ path }) => path === "/echarts"
  );
  menus.value = target.map(({ name, meta, children }) => {
    return {
      label: meta.title,
      value: name,
      children: children.map(({ name, meta }) => {
        return {
          label: meta.title,
          value: name,
        };
      }),
    };
  });
  activeRoute.value = menus.value.length
    ? menus.value[0].children[0].value
    : "";
};

onMounted(() => {
  getRoutes();
});
</script>

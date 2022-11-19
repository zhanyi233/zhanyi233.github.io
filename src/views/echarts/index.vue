<template>
  <v-sidebar :active="activeRoute" :list="menus" @click="handleChangeMenu"/>
  <div class="page-content">
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import vSidebar from "../../components/sidebar.vue";
import { useRouter, useRoute } from "vue-router";

const currentRoutePath = '/echarts';

const Router = useRouter();
const Route = useRoute();

const activeRoute = computed(() => Route.name);

const menus = ref([]);

const getRoutes = () => {
  const target = Router.options.routes.filter(
    ({ path }) => path === currentRoutePath
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
};

const handleChangeMenu = ({ value }) => {
  Router.push({
    name: value,
  });
};

onMounted(() => {
  getRoutes();
});
</script>

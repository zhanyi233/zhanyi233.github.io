<template>
  <v-header v-if="Route.path !== '/' && Route.path !== '/welcome'"/>
  <router-view />
</template>

<script setup>
import { useRoute } from "vue-router";
import vHeader from "./components/header.vue";

const Route = useRoute(); // 当前路由
</script>

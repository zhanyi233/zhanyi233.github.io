<template>
  <v-header />
  <v-sidebar />
  <div class="page-content">
    <router-view v-slot="{ Component }">
      <transition name="move" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import vHeader from "../components/header.vue";
import vSidebar from "../components/sidebar.vue";
</script>

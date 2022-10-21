<template>
  <el-scrollbar class="sidebar">
    <div class="sidebar-groups">
      <div class="sidebar-group" v-for="item in list" :key="item.value">
        <p>{{ item.label }}</p>
        <div
          class="sidebar-group__item"
          v-for="child in item.children"
          :key="child.value"
          :class="{ 'is-active': active === child.value }"
          @click="onClickMenu(child)"
        >
          {{ child.label }}
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['click'],

  props: {
    active: {
      type: String,
      default: "",
    },

    list: {
      type: Array,
      default: () => [],
    },
  },

  setup(props, ctx) {
    const onClickMenu = (item) => {
      ctx.emit('click', item);
    };

    return {
      onClickMenu,
    };
  },
});
</script>

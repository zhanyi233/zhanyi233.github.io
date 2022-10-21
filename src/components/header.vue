<template>
  <div class="navbar">
    <div class="navbar-wrapper">
      <div class="navbar-brand">Frontend</div>
      <div class="navbar-collapse">
        <ul class="navbar-nav">
          <div class="hori-selector" :style="navItemActiveStyle">
            <div class="left"></div>
            <div class="right"></div>
          </div>
          <li
            :ref="navItemRef"
            class="nav-item"
            v-for="(item, index) in navs"
            :key="item.path"
            :class="{ active: activeRoute.includes(item.path) }"
            @click="onClickMenu(item, index)"
          >
            <div class="nav-item__inner">
              <el-icon :size="20" style="margin-right: 10px">
                <component :is="item.meta.icon"></component>
              </el-icon>
              {{ item.meta.title }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const Route = useRoute(); // 当前路由
const Router = useRouter();

/**
 * @description: 导航栏
 */
let activeRoute = ref("");
const navs = ref([]);

const navItemActiveStyle = ref(null);
const refList = ref([]);
const navItemRef = (el) => {
  if (el) {
    refList.value.push(el);
  }
};

/**
 * @description: 将目标菜单高亮选中
 * @param target 目标dom
 */
const handleActiveNavitem = (target) => {
  if (!target) return;

  const height = target.clientHeight,
    width = target.clientWidth,
    top = target.offsetTop,
    left = target.offsetLeft;

  navItemActiveStyle.value = {
    width: width + "px",
    height: height + "px",
    top: top + "px",
    left: left + "px",
  };
};

const onClickMenu = ({ path }, index) => {
  activeRoute.value = path;
  const target = refList.value[index];
  Router.push(path);
};

/**
 * @description: 获取导航栏菜单
 */
const getRoutes = () => {
  activeRoute.value = Route.path;
  navs.value = Router.options.routes.filter(({ path }) => path !== "/");
  setTimeout(() => {
    init();
  }, 300);
};

/* 初始化高亮选中当前菜单 */
const init = () => {
  if (!refList.value.length) return;

  const index = navs.value.findIndex(({ path }) =>
    activeRoute.value.includes(path)
  );
  
  const target = refList.value[index];
  handleActiveNavitem(target);
};

watch(
  () => Route.path,
  (to, from) => {
    if (to !== from) {
      getRoutes();
    }
  },
  { immediate: true, deep: true }
);

onMounted(() => {
});
</script>

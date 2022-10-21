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
            :key="item.value"
            :class="{ active: item.value === activeRoute }"
            @click="onClickMenu(item, index)"
          >
            <div class="nav-item__inner">
              <el-icon :size="20" style="margin-right: 10px;">
                <component :is="item.icon"></component>
              </el-icon>
              {{ item.label }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

let activeRoute = ref("Home");
const navs = ref([
  {
    value: "Home",
    label: "首页",
    icon: "House",
  },
  {
    value: "Interview",
    label: "面试集",
    icon: 'Folder',
  },
  {
    value: "Echarts",
    label: "Echarts",
    icon: 'TrendCharts',
  },
]);

const navItemActiveStyle = ref(null);
const refList = ref([]);
const navItemRef = (el) => {
  if (el) {
    refList.value.push(el);
  }
};

const onClickMenu = ({ value }, index) => {
  activeRoute.value = value;
  const target = refList.value[index];

  handleActiveNavitem(target);
};

/**
 * @description: 将目标菜单高亮选中
 * @param target 目标dom
 */
const handleActiveNavitem = (target) => {
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

/* 初始化高亮选中当前菜单 */
const init = () => {
  const index = navs.value.findIndex(
    ({ value }) => value === activeRoute.value
  );
  const target = refList.value[index];
  handleActiveNavitem(target);
};

onMounted(() => {
  init();
});
</script>

import { createRouter, createWebHashHistory } from "vue-router";
import NProgress from "nprogress";

import 'nprogress/nprogress.css';

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    meta: {
      title: '首页',
      icon: "House",
    },
    component: () =>
          import(/* webpackChunkName: "Home" */ "../views/home/index.vue"),
  },
  {
    path: "/echarts",
    name: "Echarts",
    meta: {
      title: 'Echarts',
      icon: 'TrendCharts',
    },
    component: () =>
          import(/* webpackChunkName: "Echarts" */ "../views/echarts/index.vue"),
  },
  {
    path: "/interview",
    name: "Interview",
    meta: {
      title: '面试题集',
      icon: 'Folder',
    },
    component: () =>
          import(/* webpackChunkName: "Interview" */ "../views/interview/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;

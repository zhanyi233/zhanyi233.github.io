import { createRouter, createWebHashHistory } from "vue-router";
import NProgress from "nprogress";

import "nprogress/nprogress.css";

const routes = [
  {
    path: "/",
    redirect: "/welcome",
  },
  {
    path: "/welcome",
    name: "Welcome",
    component: () =>
      import(/* webpackChunkName: "Welcome" */ "../views/welcome.vue"),
  },
  {
    path: "/home",
    name: "Home",
    meta: {
      title: "首页",
      icon: "House",
    },
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/home/index.vue"),
  },
  {
    path: "/examples",
    name: "Examples",
    meta: {
      title: "示例",
      icon: "Star",
    },
    redirect: "/examples/css",
    component: () =>
      import(/* webpackChunkName: "Examples" */ "../views/examples/index.vue"),
    children: [
      {
        path: "/examples/css",
        name: "ExamplesCss",
        meta: {
          title: "Css",
        },
        redirect: "/examples/css/buttons",
        component: () =>
          import(
            /* webpackChunkName: "ExamplesCss" */ "../views/examples/css/index.vue"
          ),
        children: [
          {
            path: "/examples/css/buttons",
            name: "ExamplesCssButtons",
            meta: {
              title: "Button动效",
            },
            component: () =>
              import(
                /* webpackChunkName: "ExamplesCssButtons" */ "../views/examples/css/buttons.vue"
              ),
          },
          {
            path: "/examples/css/chessboard",
            name: "ExamplesCssChessboard",
            meta: {
              title: "棋盘格布局",
            },
            component: () =>
              import(
                /* webpackChunkName: "ExamplesCssChessboard" */ "../views/examples/css/chessboard.vue"
              ),
          },
          {
            path: "/examples/css/grid",
            name: "ExamplesCssGrid",
            meta: {
              title: "多种布局",
            },
            component: () =>
              import(
                /* webpackChunkName: "ExamplesCssGrid" */ "../views/examples/css/grid.vue"
              ),
          },
        ],
      },
    ],
  },
  {
    path: "/echarts",
    name: "Echarts",
    meta: {
      title: "图表",
      icon: "TrendCharts",
    },
    redirect: "/echarts/line",
    component: () =>
      import(/* webpackChunkName: "Echarts" */ "../views/echarts/index.vue"),
    children: [
      {
        path: "/echarts/line",
        name: "EchartsLine",
        meta: {
          title: "折线图",
        },
        component: () =>
          import(
            /* webpackChunkName: "EchartsLine" */ "../views/echarts/line/index.vue"
          ),
      },
      {
        path: "/echarts/pie",
        name: "EchartsPie",
        meta: {
          title: "饼图",
        },
        component: () =>
          import(
            /* webpackChunkName: "EchartsPie" */ "../views/echarts/pie/index.vue"
          ),
      },
      {
        path: "/echarts/custom",
        name: "EchartsCustom",
        meta: {
          title: "混合图表",
        },
        component: () =>
          import(
            /* webpackChunkName: "EchartsCustom" */ "../views/echarts/custom/index.vue"
          ),
      },
    ],
  },
  {
    path: "/work",
    name: "Work",
    meta: {
      title: "项目总结",
      icon: "Folder",
    },
    component: () =>
      import(/* webpackChunkName: "Work" */ "../views/work/index.vue"),
    redirect: "/work/record",
    children: [
      {
        path: "/work/record",
        name: "WorkRecord",
        meta: {
          title: "体温单",
        },
        component: () =>
          import(
            /* webpackChunkName: "WorkRecord" */ "../views/work/record.vue"
          ),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "关于我",
      icon: "User",
    },
    component: () =>
      import(/* webpackChunkName: "About" */ "../views/about/index.vue"),
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

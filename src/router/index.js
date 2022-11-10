import { createRouter, createWebHashHistory } from "vue-router";
import NProgress from "nprogress";

import "nprogress/nprogress.css";

const routes = [
  {
    path: "/",
    redirect: "/home",
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
        redirect: "/examples/css/chessboard",
        component: () =>
          import(
            /* webpackChunkName: "ExamplesCss" */ "../views/examples/css/index.vue"
          ),
        children: [
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
            /* webpackChunkName: "EchartsLine" */ "../views/echarts/line/line.vue"
          ),
      },
    ],
  },
  {
    path: "/interview",
    name: "Interview",
    meta: {
      title: "面试题集",
      icon: "Folder",
    },
    component: () =>
      import(
        /* webpackChunkName: "Interview" */ "../views/interview/index.vue"
      ),
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

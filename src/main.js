import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // 路由

// 通用组件
import ElementPlus from "element-plus"; // 组件库
import * as Elicons from "@element-plus/icons-vue"; // element-ui icons
import CodeExample from "../src/components/CodeExample.vue"; // 代码展示
import VMessage from '../src/components/message.vue';

// 粒子动画
import Particles from "vue3-particles";

// 公共样式
import "element-plus/dist/index.css";
import "./assets/css/index.scss";

const app = createApp(App);

// 公共 icon
for (const name in Elicons) {
  app.component(name, Elicons[name]);
}

app.use(ElementPlus);
app.component("code-example", CodeExample);
app.component('v-message', VMessage);
app.use(router);
app.use(Particles);
app.mount("#app");

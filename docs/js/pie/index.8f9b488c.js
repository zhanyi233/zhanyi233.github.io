import{i as f}from"../index/index.ac5a7abe.js";import{o as y,a as c,c as a,_ as d,F as i,m as x,h as _,f as r,q as g,s as v,p as l}from"../../assets/index.570b7bb6.js";function p(e){e.__sourceCode=`<template>
  <div id="basic-pie" class="chart"></div>
</template>

<script setup>
import { onMounted } from "vue";
import * as Echarts from "echarts";

/**
 * @description: \u7ED8\u5236\u56FE\u8868
 */
const drawChart = () => {
  const myChart = Echarts.init(document.getElementById("basic-pie"));
  const option = {
        color: ["#FF8080", "#FFC200", "#49CAA9", "#4081F7"],
        title: {
          text: "65",
          left: "center",
          top: "50%",
          textStyle: {
            color: "#333",
            fontSize: 16,
            align: "center",
          },
        },
        graphic: {
          type: "text",
          left: "center",
          top: "45%",
          style: {
            text: "\u60A3\u8005\u603B\u6570",
            textAlign: "center",
            fill: "#333",
            fontSize: 14,
          },
        },
        series: [
          {
            name: "\u75C5\u533A\u6982\u51B5",
            minAngle: 10, //\u8BBE\u7F6E\u6247\u5F62\u7684\u6700\u5C0F\u5360\u6BD4
            type: "pie",
            center: ["50%", "50%"],
            radius: ['40%', '90%'],
            roseType: "radius",
            itemStyle: {
              borderRadius: 0,
            },
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            data: [30, 15, 20, 33],
          },
        ],
      };
  // \u7ED8\u5236\u56FE\u8868
  myChart.setOption(option);

  window.addEventListener("resize", () => {
    myChart.resize();
  });
};

onMounted(() => {
  drawChart();
});
<\/script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 400px;
}
</style>`,e.__sourceCodeTitle="\u57FA\u672C\u7528\u6CD5"}const b={id:"basic-pie",class:"chart"},m={__name:"basic-pie",setup(e){const o=()=>{const n=f(document.getElementById("basic-pie")),s={color:["#FF8080","#FFC200","#49CAA9","#4081F7"],title:{text:"65",left:"center",top:"50%",textStyle:{color:"#333",fontSize:16,align:"center"}},graphic:{type:"text",left:"center",top:"45%",style:{text:"\u60A3\u8005\u603B\u6570",textAlign:"center",fill:"#333",fontSize:14}},series:[{name:"\u75C5\u533A\u6982\u51B5",minAngle:10,type:"pie",center:["50%","50%"],radius:["40%","90%"],roseType:"radius",itemStyle:{borderRadius:0},label:{show:!1},labelLine:{show:!1},data:[30,15,20,33]}]};n.setOption(s),window.addEventListener("resize",()=>{n.resize()})};return y(()=>{o()}),(n,s)=>(c(),a("div",b))}};typeof p=="function"&&p(m);const w=d(m,[["__scopeId","data-v-006bf7e4"]]);const C=e=>(g("data-v-e8086985"),e=e(),v(),e),F=C(()=>_("h2",{class:"component-h1"},"\u997C\u56FE",-1)),S={__name:"index",setup(e){const o=[{title:"\u6247\u533A\u653E\u5927",desc:["\u6247\u533A\u9ED8\u8BA4\u653E\u5927","\u81EA\u5B9A\u4E49\u4E2D\u95F4\u6587\u5B57"],component:w}];return(n,s)=>{const u=l("v-message"),h=l("code-example");return c(),a(i,null,[F,(c(),a(i,null,x(o,t=>_("div",{class:"component-block",key:t.component},[r(u,{title:t.title,desc:t.desc},null,8,["title","desc"]),r(h,{component:t.component},null,8,["component"])])),64))],64)}}},E=d(S,[["__scopeId","data-v-e8086985"]]);export{E as default};

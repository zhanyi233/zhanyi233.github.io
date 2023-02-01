<demo>基本用法</demo>
<template>
  <div id="tangential-polar-bar" class="chart"></div>
</template>

<script setup>
import { onMounted } from "vue";
import * as Echarts from "echarts";

/**
 * @description: 绘制图表
 */
const drawChart = () => {
  const myChart = Echarts.init(document.getElementById("tangential-polar-bar"));
  const total = 65;
  const option = {
    title: {
      // 中间标题、数据
      text: total, // 标题
      textStyle: {
        color: "#000",
        fontSize: 16,
      },
      subtext: "患者总数", // 副文本标题
      subtextStyle: {
        color: "#333",
        fontSize: 14,
      },
      itemGap: 5, // 标题间的距离
      left: "center",
      bottom: "15%",
    },
    // 极坐标系的角度轴
    angleAxis: {
      // 起始角度，180 也可以是 225
      startAngle: 180,
      max: total * 2,
      clockwise: true, // 逆时针
      // 隐藏刻度线
      show: false,
    },
    // 极坐标系的径向轴
    radiusAxis: {
      type: "category",
      show: true,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    polar: {
      center: ["50%", "80%"],
      radius: ["40%", "100%"], // 图形大小
    },
    series: [
      // 上层数据
      {
        type: "bar",
        z: 2,
        data: [
          {
            value: "5",
            itemStyle: {
              opacity: 1,
              color: "#FF8080",
            },
          },
          {
            value: "14",
            itemStyle: {
              opacity: 1,
              color: "#FFC200",
            },
          },
          {
            value: "50",
            itemStyle: {
              opacity: 1,
              color: "#49CAA9",
            },
          },
          {
            value: "33",
            itemStyle: {
              opacity: 1,
              color: "#4081F7",
            },
          },
        ],
        showBackground: true,
        backgroundStyle: {
          color: "transparent",
        },
        coordinateSystem: "polar", // 使用极坐标系
        roundCap: true,
        barWidth: 5,
        barGap: "-100%",
        emphasis: {
          disabled: true,
        },
      },
      // 底层背景色
      {
        type: "bar",
        z: 1,
        // 需要的圆环跨度大小，可以是180,270等
        data: [total, total, total, total],
        coordinateSystem: "polar",
        roundCap: true,
        barWidth: 5,
        barGap: "-100%",
        itemStyle: {
          opacity: 1,
          color: "#E9EEF8",
        },
        emphasis: {
          disabled: true,
        },
      },
    ],
  };
  // 绘制图表
  myChart.setOption(option);

  window.addEventListener("resize", () => {
    myChart.resize();
  });
};

onMounted(() => {
  drawChart();
});
</script>

<style lang="scss" scoped>
.chart {
  margin: 0 auto;
  width: 200px;
  height: 200px;
}
</style>

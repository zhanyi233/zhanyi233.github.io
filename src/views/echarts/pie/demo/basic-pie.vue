<demo>基本用法</demo>
<template>
  <div id="basic-pie" class="chart"></div>
</template>

<script setup>
import { onMounted } from "vue";
import * as Echarts from "echarts";

/**
 * @description: 绘制图表
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
            text: "患者总数",
            textAlign: "center",
            fill: "#333",
            fontSize: 14,
          },
        },
        series: [
          {
            name: "病区概况",
            minAngle: 10, //设置扇形的最小占比
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
  width: 100%;
  height: 400px;
}
</style>

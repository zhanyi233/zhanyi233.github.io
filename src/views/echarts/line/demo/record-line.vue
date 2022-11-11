<demo>网格用法</demo>
<template>
  <div class="preview-record" v-if="previewConfig" :style="previewStyle">
    <header class="header">
      <section
        class="sample-table"
        v-for="(data, index) of previewConfig.headerTableData"
        :key="index"
      >
        <section class="label-columns" :style="`width:${labelWidth || 70}px;`">
          <ul class="label-list" :style="`width:${labelWidth || 70}px;`">
            <li
              v-for="(item, index) of data.label"
              :key="index"
              class="label-list-item"
            >
              {{ item }}
            </li>
          </ul>
        </section>
        <section
          class="cell-columns"
          :style="`width:calc(100% - ${labelWidth || 70}px);`"
        >
          <div
            v-for="i in data.label.length * data.cellColumns"
            :key="i"
            class="cell-item"
            :style="`width: calc(100% / ${data.cellColumns})`"
          >
            <span class="cell-item--label">
              {{
                data && data.columnsData && data.columnsData.length
                  ? data.columnsData[i - 1] || ""
                  : ""
              }}
            </span>
          </div>
        </section>
      </section>
    </header>
    <section class="chart-container">
      <div id="grid-line" class="chart"></div>
    </section>
    <footer class="footer">
      <section
        class="sample-table"
        v-for="(data, index) of previewConfig.footerTableData"
        :key="index"
      >
        <section class="label-columns" :style="`width:${labelWidth || 70}px;`">
          <ul class="label-list" :style="`width:${labelWidth || 70}px;`">
            <li
              v-for="(item, index) of data.label"
              :key="index"
              class="label-list-item"
            >
              {{ item }}
            </li>
          </ul>
        </section>
        <section
          class="cell-columns"
          :style="`width:calc(100% - ${labelWidth || 70}px);`"
        >
          <div
            v-for="i in data.label.length * data.cellColumns"
            :key="i"
            class="cell-item"
            :style="`width: calc(100% / ${data.cellColumns})`"
          >
            <span class="cell-item--label">
              {{
                data && data.columnsData && data.columnsData.length
                  ? data.columnsData[i - 1] || ""
                  : ""
              }}
            </span>
          </div>
        </section>
      </section>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import * as Echarts from "echarts";

const GridTop = 20;

const labelWidth = computed(() => {
  const defaultLeft = 100;
  if (!previewConfig.value || !previewConfig.value.canvasConfig)
    return defaultLeft;

  return previewConfig.value.canvasConfig.left || defaultLeft;
});

const previewStyle = computed(() => {
  if (previewConfig.value.grid) {
    const { top, right, bottom, left, width } = previewConfig.value.grid;

    return {
      padding: `${top}px ${right}px ${bottom}px ${left}px`,
      width: `${width}px`,
    };
  }
  return null;
});

const previewConfig = ref(null); // Echarts 预览配置

const xAxisData = ref([
  "2020-10-24",
  "2020-10-25",
  "2020-10-26",
  "2020-10-27",
  "2020-10-28",
  "2020-10-29",
  "2020-10-30",
  "2020-10-31",
  "2020-11-01",
  "2020-11-02",
  "2020-11-03",
  "2020-11-04",
  "2020-11-05",
  "2020-11-06",
]);

const form = ref({
  grid: {
    width: 595,
    height: 842,
  },
  graphicStroke: "#999",
  margin: {
    left: 8,
    right: 8,
    top: 8,
    bottom: 8,
  },
  dateNum: 5,
  rows: 5,
  columns: 6,
  startMoment: 2,
  userDetails: [
    {
      value: "张三",
      source: "姓名",
      nickname: "姓名",
    },
    {
      value: "2020/10/24",
      source: "入院日期",
      nickname: "入院日期",
    },
    {
      value: "骨科",
      source: "科室",
      nickname: "科室",
    },
    {
      value: "骨科病区",
      source: "病区",
      nickname: "病区",
    },
    {
      value: "001",
      source: "床号",
      nickname: "床号",
    },
    {
      value: "202010240098",
      source: "住院号",
      nickname: "住院号",
    },
  ],
  normalHeader: [
    {
      name: "日期",
      nickname: "日期",
      visible: true,
    },
    {
      name: "住院日数",
      nickname: "住院日数",
      visible: true,
    },
    {
      name: "手术后日数",
      nickname: "术后日数",
      visible: true,
    },
  ],
  curves: [
    {
      name: "脉搏",
      max: 180,
      min: 20,
      alertMax: 120,
      alertMin: 50,
      visible: true,
      color: "#2D5AFA",
      unit: "次/分",
      step: 20,
      series: {
        symbol: "triangle",
        connectNulls: false,
        data: [
          142.0, 144.9, 147.0, 123.2, 125.6, 156.7, 135.6, 162.2, 132.6, 120.0,
          116.4, 130.3,
        ],
      },
    },
    {
      name: "体温",
      max: 42,
      min: 34,
      alertMax: 38,
      alertMin: 35,
      visible: true,
      color: "#EC0000",
      unit: "℃",
      step: 1,
      series: {
        symbol: "rect",
        connectNulls: false,
        data: [
          36.6,
          35.9,
          39.0,
          null,
          38.7,
          37.7,
          37.6,
          38.2,
          38.7,
          38.8,
          36.0,
          38.3,
        ],
      },
    },
    {
      name: "呼吸",
      max: 90,
      min: 0,
      alertMax: 30,
      alertMin: 10,
      visible: false,
      color: "#2D5AFA",
      unit: "次/分",
      step: 20,
      series: {
        symbol: "rect",
        connectNulls: false,
        data: [66, 56, 56, 68, 70, 67, 53, 67, 64, 66, 67, 58],
      },
    },
  ],
  specialProj: [
    {
      name: "呼吸",
      splitNum: 6,
      unit: "次/分",
    },
    {
      name: "血压",
      splitNum: 2,
      unit: "mmHg",
    },
    {
      name: "入量",
      unit: "ml",
      splitNum: 1,
    },
    {
      name: "出量",
      unit: "ml",
      splitNum: 1,
    },
    {
      name: "大便",
      unit: "次/日",
      splitNum: 1,
    },
    {
      name: "小便",
      unit: "次/日",
      splitNum: 1,
    },
    {
      name: "体重",
      unit: "kg",
      splitNum: 1,
    },
    {
      name: "身高",
      unit: "cm",
      splitNum: 1,
    },
    {
      name: "引流量",
      unit: "ml",
      splitNum: 1,
    },
    {
      name: "备注",
      unit: "",
      splitNum: 1,
    },
  ],
});

const normalizeParams = () => {
  const normalizeHeaderData = () => {
    const { normalHeader, dateNum } = form.value;
    return [
      {
        label: normalHeader
          .filter(({ visible }) => visible)
          .map(({ nickname }) => nickname),
        cellColumns: dateNum,
        columnsData: xAxisData.value
          .slice(0, dateNum)
          .map((item) => item.replace("2020-", "")),
      },
    ];
  };
  const normalizeUserDetails = () => {
    const { userDetails } = form.value;

    return userDetails.map(({ nickname: label, value }) => ({
      label,
      value,
    }));
  };
  const normalizeSpecialProj = () => {
    const { specialProj, dateNum } = form.value;

    return specialProj.map(({ name, unit, splitNum }) => ({
      label: [`${name}${unit ? `(${unit})` : ""}`],
      cellColumns: dateNum * splitNum,
    }));
  };
  const normalizeYAxisData = () => {
    return form.value.curves.filter(({ visible }) => visible);
  };

  const normalizeMoments = () => {
    const { dateNum, columns, startMoment } = form.value;

    let momentStr = "";

    const normalizeNum = (num) => {
      const normalized = num < 10 ? `${num}` : num;

      return `${normalized},`;
    };

    for (let i = 0; i < columns; i += 1) {
      const cur = startMoment + (24 / columns) * i;

      if (cur === 24) {
        momentStr += normalizeNum(0);
      } else if (cur > 24) {
        momentStr += normalizeNum(cur - 24);
      } else {
        momentStr += normalizeNum(cur);
      }
    }
    return momentStr
      .repeat(dateNum)
      .split(",")
      .filter((item) => item);
  };

  const headerTableData = normalizeHeaderData(),
    userDetails = normalizeUserDetails(),
    yAxisData = normalizeYAxisData(),
    footerTableData = normalizeSpecialProj(),
    moments = normalizeMoments();

  return {
    headerTableData,
    userDetails,
    yAxisData,
    footerTableData,
    moments,
    xAxisData: xAxisData.value,
  };
};

/**
 * 绘制canvas网格
 * @param {Object} grid canvasConfig
 * @param {Array} yAxis y轴数据
 */
const genGraphicList = (grid, yAxis = [], units) => {
  const defaultConfig = {
    type: "line",
    cursor: "auto",
  };
  const shapeDefault = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  };

  const { moments, graphic, columns } = grid;
  const cellColumns = moments.length;
  const lineWidth = 1;

  const lineLength = adjustSize(grid.width) - grid.left; // 右侧部分
  const spacing = (lineLength - cellColumns * lineWidth) / cellColumns; // 每个单元格的大小

  const projectConfig = [
    [
      {
        name: "时间",
        color: "#000",
      },
    ],
    yAxis,
    units,
  ];

  const genXAxis = ({ lineStyle, cellColumns, spacing }) => {
    const data = [];
    for (let i = 0; i < cellColumns; i += 1) {
      data.push({
        ...defaultConfig,
        top: i * (spacing + lineWidth) - 2 * lineWidth,
        left: i <= 1 ? -3 : grid.left - 1,
        style: {
          stroke: lineStyle.stroke || graphic.stroke,
          lineWidth,
        },
        shape: {
          ...shapeDefault,
          x2: lineStyle.length + (i <= 1 ? grid.left + 1 : 0),
        },
      });
    }
    return data;
  };

  const genYAxis = ({ top, leftSpace, lineStyle, cellColumns }) => {
    const data = [];

    for (let i = 0; i < cellColumns; i += 1) {
      const realSpacing = i * (spacing + lineWidth) - 2.2 * lineWidth;

      data.push({
        ...defaultConfig,
        top: top === undefined ? -2 : top,
        left: leftSpace + realSpacing,
        style: {
          stroke:
            i && Number.isInteger(i / columns)
              ? "red"
              : lineStyle.stroke || graphic.stroke,
          lineWidth,
        },
        shape: {
          ...shapeDefault,
          y1: lineStyle.length,
        },
      });
    }
    return data;
  };

  const genText = ({
    data: textArr = [],
    fill = "#000",
    top = 0,
    left = 0,
    fontSize = 12,
    spacing,
  }) => {
    const data = [];

    for (let i = 0; i < textArr.length; i += 1) {
      const hasDoubleBit = /.*[^x00-xFF]+.*/.test(textArr[i]);

      const singleBitW =
        (fontSize >= 12 ? 12 : fontSize) / 2 / (hasDoubleBit ? 2 : 1);

      const halfFontW =
        (textArr[i].replace(/[^x00-xFF]/g, "--").length / 2) * singleBitW;

      data.push({
        type: "text",
        top: top || 0,
        left: left + spacing * (i + 0.5) + (i + 0.5) * lineWidth - halfFontW,
        cursor: "auto",
        style: {
          text: textArr[i],
          x: 0,
          y: 0,
          fill: fill || "#000",
          font: `${
            fontSize >= 12 ? 12 : fontSize
          }px "Microsoft YaHei", sans-serif`,
          stroke: null,
          lineWidth: 0,
        },
      });
    }
    return data;
  };

  const lineHeight = adjustSize(38);

  const genYAxisText = (labels, fontSize) => {
    const rowLabelMarginT = lineHeight / 2 - fontSize / 2 + lineWidth;

    const data = [];

    for (let row = 0; row < labels.length; row += 1) {
      const _columns = labels[row];
      const colsLen = _columns.length;
      for (let col = 0; col < colsLen; col += 1) {
        const { name, top = 0 } = _columns[col];

        const _columnsSpacing = grid.left / colsLen;

        data.push(
          ...genText({
            data: [name],
            fill: "#000",
            fontSize,
            spacing: _columnsSpacing,
            left: _columnsSpacing * col - fontSize / 2,
            top: lineHeight * row + rowLabelMarginT + top,
          })
        );
      }
    }
    return data;
  };

  const genYAxisLine = (len) => {
    const data = [];
    for (let col = 1; col <= len; col += 1) {
      data.push(
        ...genYAxis({
          leftSpace: (grid.left / len) * col,
          top: lineHeight - 1,
          lineStyle: {
            length: lineLength,
            width: 1,
            stroke: "#000",
          },
          cellColumns: 1,
        })
      );
    }

    return data;
  };

  const xAxisSplitLine = genXAxis({
    lineStyle: {
      length: lineLength,
      stroke: "#000",
    },
    spacing: lineHeight,
    cellColumns: 2,
  });

  const yAxisSplitLine = genYAxis({
    leftSpace: grid.left,
    lineStyle: {
      length: lineLength,
      width: 1,
    },
    cellColumns,
  });

  const genMomentText = () => {
    const momentTextFontSize = spacing - 2,
      data = [];

    for (let i = 0; i < moments.length; i += 1) {
      data.push(
        ...genText({
          data: [moments[i]],
          fill: "#000",
          left: grid.left + i * (lineWidth + spacing),
          top:
            momentTextFontSize >= 12
              ? 12 / 2
              : (GridTop - momentTextFontSize) / 2,
          fontSize: momentTextFontSize,
          spacing,
        })
      );
    }
    return data;
  };
  const momentText = genMomentText(),
    yAxisLine = genYAxisLine(projectConfig[1].length),
    yAxisText = genYAxisText(projectConfig, GridTop / 2);

  return [
    ...xAxisSplitLine,
    ...yAxisSplitLine,
    ...yAxisLine,
    ...momentText,
    ...yAxisText,
  ];
};

/**
 * 初始化chart的配置参数
 */
const initChartOptions = () => {
  const { canvasConfig } = previewConfig.value;

  // 生成x轴的标签数据
  const genXAxisData = ({ moments, columns, xAxisData }) => {
    const data = [];

    for (let i = 0; i < moments.length; i += 1) {
      const index = Math.floor(i / columns);
      data.push(`${xAxisData[index] || "0000-00-00"} ${moments[i] || "00"}:00`);
    }
    return data;
  };

  // 生成y轴标签数据和折线数据
  const genYAxisAndSeries = (arr) => {
    const yAxis = [],
      seriesData = [],
      units = [],
      colors = [];

    arr.forEach((item, index) => {
      const {
        name,
        max = 1,
        min = 1,
        step = 1,
        series = [],
        color = "#000",
        unit = "",
      } = item;

      const splitNumber = (max - min) / step;

      const offset =
        (canvasConfig.left / arr.length) * (arr.length - index - 1);

      colors.push(color);
      units.push({
        name: unit ? `(${unit})` : "",
        top: -14,
      });

      yAxis.push({
        type: "value",
        name,
        color,
        top: -4,
        nameTextStyle: {
          color: "transparent",
        },
        min,
        max,
        interval: (max - min) / splitNumber / (canvasConfig.rows || 1),
        position: "left",
        offset,
        splitLine: {
          lineStyle: {
            color: canvasConfig.graphic.stroke,
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          color: "#000",
          margin: 5,
          formatter: function (value) {
            if (value % step !== 0 || value === max || value === min) return "";
            return value;
          },
        },
      });

      const { connectNulls, data, symbol } = series;

      const seriesItem = {
        name,
        type: "line",
        connectNulls, // 断点连线
        data,
        animation: false,
        symbolSize: 6,
        symbol,
        yAxisIndex: index,
      };

      if (name === "体温") {
        const genMarkLineData = () => {
          const data = [];
          for (let i = min; i <= max - 1; i += 1) {
            data.push({
              yAxis: i,
              lineStyle: { color: i === 37 ? "red" : "#000" },
            });
          }
          return data;
        };
        seriesItem.markLine = {
          animation: false,
          symbolSize: 0,
          lineStyle: {
            type: "solid",
            width: 2,
          },
          data: genMarkLineData(),
        };
      }
      seriesData.push(seriesItem);
    });

    return {
      color: colors,
      yAxis,
      units,
      series: seriesData,
    };
  };

  const { yAxis, units, series, color } = genYAxisAndSeries(
    canvasConfig.yAxisData
  );

  // 生成网格数据
  const graphicList = genGraphicList(canvasConfig, yAxis, units);

  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      className: "chart-inner_tooltip",
    },
    grid: {
      left: canvasConfig.left,
      right: 0,
      top: GridTop,
      bottom: 0,
    },
    color,
    graphic: [
      // 支持水印
      ...graphicList,
      {
        type: "group",
        rotation: Math.PI / 4,
        bounding: "raw",
        right: 80,
        bottom: 80,
        z: 100,
        children: [
          {
            type: "rect",
            left: "center",
            top: "center",
            z: 100,
            shape: {
              width: 260,
              height: 28,
            },
            style: {
              fill: "rgba(0,0,0,0.25)",
            },
          },
          {
            type: "text",
            left: "center",
            top: "center",
            z: 100,
            style: {
              fill: "#fff",
              text: "WINEX MY",
              font: "bold 14px Microsoft YaHei",
            },
          },
        ],
      },
    ],
    xAxis: [
      {
        type: "category",
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        data: genXAxisData(canvasConfig),
      },
    ],
    yAxis,
    series,
  };
};

/**
 * @description: 绘制图表
 */
const drawChart = () => {
  const myChart = Echarts.init(document.getElementById("grid-line"));

  const option = initChartOptions();

  // 绘制图表
  myChart.setOption(option);

  window.addEventListener("resize", () => {
    myChart.resize();
  });
};

const onSubmitPreviewConfig = () => {
  const normalized = normalizeParams();

  const config = {
    ...form.value,
    ...normalized,
  };

  const {
    margin = {},
    grid = {},
    header = {},
    dateNum = 1,
    columns = 1,
    rows = 1,
    yAxisData = [],
    headerTableData = {},
    userDetails = [],
    footerTableData = [],
    moments = [],
    graphicStroke = "#999",
    xAxisData = [],
  } = config;

  // echarts实际宽度
  const canvasW = grid.width - margin.left - margin.right - 4;

  const yAxisDataLen = yAxisData.length;

  const data = {
    header,
    grid: {
      ...grid,
      ...margin,
    },
    userDetails,
    canvasConfig: {
      dateNum,
      rows,
      columns,
      width: canvasW,
      left: yAxisDataLen > 1 ? yAxisDataLen * 40 : 50,
      moments,
      graphic: {
        stroke: graphicStroke,
      },
      xAxisData,
      yAxisData,
    },
    headerTableData,
    footerTableData,
  };

  previewConfig.value = data;
  drawChart();
};

onMounted(() => {
  onSubmitPreviewConfig();
});
</script>

<style lang="scss" scoped>
$--cell-height: 18px;

.preview-record {
  .sample-table {
    display: flex;
    font-size: 12px;
    color: #000;
    border: 1px solid #000;
    border-right-width: 0;
    border-bottom-width: 0;

    .label-list {
      text-align: center;
      margin: 0;
      padding: 0;

      .label-list-item {
        list-style: none;
        min-height: $--cell-height;
        line-height: $--cell-height;
        border-bottom: 1px solid #000;
        box-sizing: border-box;
      }
    }

    .cell-columns {
      display: flex;
      flex-wrap: wrap;
      border-left: 1px solid #000;

      .cell-item {
        min-height: $--cell-height;
        font-size: 10px;
        text-align: center;
        list-style: none;
        border: 1px solid #000;
        border-top-width: 0;
        border-left-color: transparent;
        box-sizing: border-box;

        &--label {
          display: block;
          height: 100%;
          line-height: calc(#{$--cell-height} - 1px);
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }
  }
}
</style>

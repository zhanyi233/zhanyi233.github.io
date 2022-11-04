<template>
  <div class="code-example">
    <div class="source" v-if="component">
      <component :is="component" />
    </div>
    <div class="op-btn">
      <ElTooltip content="复制源代码" :show-arrow="false">
        <el-icon
          :size="18"
          style="cursor: pointer; margin-right: 18px"
          @click="copyClick"
          ><CopyDocument
        /></el-icon>
      </ElTooltip>
      <ElTooltip content="查看源代码" :show-arrow="false">
        <el-icon
          :size="20"
          style="cursor: pointer"
          @click="showCode = !showCode"
          ><View
        /></el-icon>
      </ElTooltip>
    </div>
    <div
      class="meta"
      ref="meta"
      :style="{ height: childHeight }"
      v-if="component"
    >
      <div ref="codeBlock" class="demo-container-code" v-show="showCode">
        <pre class="language-html" v-html="html" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch, nextTick } from "vue";
import "prismjs";
import "../assets/css/code.scss";
import { ElMessage } from "element-plus";
import useClipboard from "vue-clipboard3";
const { toClipboard } = useClipboard();

defineOptions({ name: "CodeExample" });

const props = defineProps({
  component: {
    type: Object,
    default: () => ({}),
  },
});

const showCode = ref(false);
const childHeight = ref("0");
const codeBlock = ref();

const Prism = window.Prism;
const html = computed(() => {
  return Prism.highlight(
    props.component.__sourceCode,
    Prism.languages.html,
    "html"
  );
});

const copyClick = () => {
  toClipboard(props.component.__sourceCode);
  ElMessage({
    message: "Code copied!",
    type: "success",
  });
};

watch(showCode, (val) => {
  nextTick(() => {
    childHeight.value = val ? `${codeBlock.value.offsetHeight}px` : "0";
  });
});

// refs
</script>

<style lang="scss" scoped>
.code-example {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  }

  .source {
    padding: 24px;
  }

  .op-btn {
    border-top: solid 1px #eaeefb;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 32px;
  }

  .meta {
    background-color: #fafafa;
    overflow: hidden;
    height: 0;
    transition: height 0.2s;
  }
}
</style>

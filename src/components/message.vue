<template>
  <div class="v-message" :class="[`is-${status}`]">
    <p>{{ title }}</p>
    <div class="desc">
			<template v-if="isArray(desc)">
				<div v-for="item in desc" :key="item">{{ item }}</div>
			</template>
			<template v-else>
				{{ desc }}
			</template>
		</div>
  </div>
</template>

<script>
export const msgTypes = ["tip", "warning", "info"];
</script>

<script setup>
import { isArray } from '@vue/shared'

const props = defineProps({
  title: {
    type: String,
    default: "TIP",
  },

  desc: {
    type: [String, Array],
    default: "",
  },

  status: {
    type: String,
    default: "tip",
    validator: (val) => {
      return msgTypes.includes(val);
    },
  },
});
</script>

<style lang="scss" scoped>
.v-message {
  padding: 10px 16px;
  border-radius: 4px;
  margin: 20px 0;

  &.is-tip {
    background-color: var(--block-tip-bg-color);
    border-left: 5px solid var(--color-primary);
  }

	p {
		font-size: 16px;
		font-weight: bold;
	}

  .desc {
    margin-top: 10px;
    line-height: 32px;
		color: var(--color-text--lighter);
  }
}
</style>

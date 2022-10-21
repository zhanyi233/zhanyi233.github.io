import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { plugin as markdown } from "vite-plugin-markdown";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), [markdown({ mode: ["html", "toc"] })]],
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  build: {
    outDir: "docs",
  },
});

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ExampleTransform from "./src/plugins/example-transform";
import DefineOptions from "unplugin-vue-define-options/vite";

import { plugin as markdown } from "vite-plugin-markdown";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    [markdown({ mode: ["html", "toc", 'vue'] })],
    DefineOptions(),
    ExampleTransform,
  ],
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  build: {
    outDir: 'docs',
    sourcemap: false,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split("/")
            : [];
          const fileName =
            facadeModuleId[facadeModuleId.length - 2] || "[name]";
          return `js/${fileName}/[name].[hash].js`;
        },
      },
    },
  },
});

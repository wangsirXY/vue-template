import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    "@vue/babel-plugin-jsx",
    AutoImport({
      // 注册要自动引入的库
      imports: ["vue", "vue-router", "pinia"],
      // 将方法与文件之间的对应关系生成到 auto-import.d.ts 文件中
      dts: "auto-import.d.ts",
      resolvers: [],
    }),
    Components({
      // 指定组件位置，默认是 src/components
      dirs: ["src/components", "src/views", "src/assets/icons"],
      // 搜索子目录
      deep: true,
      // 组件的有效文件扩展名
      extensions: ["vue"],
      // 配置文件生成位置
      dts: "components.d.ts",
      resolvers: [],
    }),
  ],
  server: {
    port: 8000,
    open: true,
    proxy: {},
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})

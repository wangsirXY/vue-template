/// <reference types="vite/client" />

// 解决无法找到.vue模块的类型警告
declare module "*.vue" {
  import { App, defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void;
  };
  export default component;
}
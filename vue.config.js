const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 自定义服务配置
  devServer: {
    open: true,	// 自动打开浏览器
    port: 8000	// 自定义端口号，不建议更改
  },
});

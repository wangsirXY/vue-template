# [Vue3 项目开发模板](https://github.com/wangsirXY/vue-template) 

> 使用 Vue3 + Vue Router + Pinia + TypeScript 封装一个纯净的前端模板，大幅提高开发效率！
>
> 前端项目 By [程序员孤安](https://wangsir.info) 

## 技术栈

主要技术：

- Vue3 
- Vite 2
- TypeScript 类型控制
- Eslint 代码规范控制
- Prettier 美化代码

依赖库：

- axios 网络请求
- Husky 提交规范

## 目录结构

```bash
default/
├── .husky   # husky提交规范
├── .vscode  # vscode相关配置
│   └── extensions.json  # 配置vscode推荐插件
├── public  # 静态资源
├── src     # 根目录
│   └── @api     # api封装
│      └── xxxAPI.ts  # 模块api封装
│   └── assets   # 静态资源
│      └── styles  # css样式
│   └── router   # 路由配置
│      └── index.ts
│   └── stores   # pinia目录
│      └── @type   # 数据模型
│         └── xxx.types.ts  # 模块数据模型
│      └── xxxStore.ts  # 模块store
│   └── utils    # 工具包目录
│      └── myAxios.ts  # 封装单例axios
│      └── request.ts  # 封装axios请求
│   └── views    # 视图目录
│   └── App.vue  # 视图入口文件
│   └── main.ts  # 项目入口文件
├── .cz-config.js      # husky commit提交类别配置文件
├── .env.development   # 开发环境
├── .env.production    # 生产环境
├── .eslintrc.cjs      # 配置eslint
├── .gitignore         # 配置忽略文件
├── .prettierrc.json   # 代码自动格式化规范
├── commitlint.config.js  # husky继承的规则，限制commit提交type范围
├── env.d.ts           # vite配置env全局变量
├── index.html         # 静态入口页面
├── package-lock.json	# 依赖包名称、版本号、下载地址、及这个模块又依赖了哪些依赖
├── package.json       # 依赖包配置文件
├── README.md          # 项目说明文件
├── tsconfig.json      # ts配置文件
├── vite.config.ts     # vite全局配置
├── yarn.lock          # yarn日志
```

## 快速启动

安装依赖：

```bash
yarn 
```

运行：

```bash
yarn dev
```

打包：

```bash
yarn build
```

## 自定义配置

### Husky 提交规范

> 项目引入 `cz-customizable` + `husky` 进行强制 Git 代码提交规范，开发者可以在 `.cz-config.js` 文件中配置 Commit 的提交类别，并在 `commitlint.config.js` 文件中限制提交的类别。

**husky commit 提交类别配置文件** 

```js
// .cz-config.js
module.exports = {
  // 可选类型
  types: [
    { value: "init", name: "init: 初始化" },
  ],
  // 消息步骤
  messages: {
    type: "请选择提交类型:",
    customScope: "请输入修改范围(可选):",
    subject: "请简要描述提交(必填):",
    body: "请输入详细描述(可选):",
    footer: "请输入要关闭的issue(可选):",
    confirmCommit: "确认使用以上信息提交？(y/n/e/h)"
  },
  // 跳过问题
  skipQuestions: ["body", "footer"],
  // subject文字长度默认是72
  subjectLimit: 72
}
```

**husky继承的规则，限制commit提交type范围** 

```js
// commitlint.config.js
module.exports = {
  // 继承的规则
  extends: ["@commitlint/config-conventional"],
  // 定义规则类型
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    "type-enum": [
      2,
      "always",
      [
        "init", // 初始化
      ],
    ],
    // subject 大小写不做校验
    "subject-case": [0],
  },
};
```

## 文档

- [Vue3 框架](https://cn.vuejs.org/) 
- [Vue Router v4.x](https://router.vuejs.org/zh/) 
- [Pinia](https://pinia.vuejs.org/) 
- [TypeScript](https://www.tslang.cn/index.html) 
- [husky 原生 git 钩子](https://typicode.github.io/husky/#/) 
- [git emoji](https://gitmoji.dev/) 

## Licence

本项目没有开源协议文档
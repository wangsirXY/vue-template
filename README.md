# [Vue 项目开发模板](https://github.com/wangsirXY/vue-template) 

> 分别使用 Vue2 和 Vue3 封装一个纯净的前端模板，大幅提高开发效率！
>
> 前端项目 By [程序员孤安](https://github.com/wangsirXY) 

## 项目优势

### 开发者

- 可以直接下载集成Vue基本模块的前端框架，或二次开发；
- 可以自己定制功能并接入系统；

### 学习者

- 可以学到 Vue 的开发方式；
- 可以学到较为规范的代码目录和格式；

## 使用

1. Vue2 请移步至 [vue2分支](https://github.com/wangsirXY/vue-template/tree/vue2) 下载。
2. Vue3 请移步至 [vue3分支](https://github.com/wangsirXY/vue-template/tree/vue3) 下载。

## 部署

> 本项目基于 Vue 开发部署，支持二次开发。

### 配置

> 集成项目前置的一些配置。

#### Husky 配置

> [Husky](https://typicode.github.io/husky) 可以用它来检测你的提交信息，运行测试，检测代码等等。Husky支持所有Git钩子。
>
> 使用 `git cz` 来代替 `git commit` 来规范 git 提交信息。

1. 安装依赖

   ```bash
   npm install -g commitizen@4.2.4
   yarn add cz-customizable@6.3.0 -D
   ```

2. 在 `package.json` 中进行新增配置

   ```js
   "config": {
     "commitizen": {
       "path": "node_modules/cz-customizable"
     }
   }
   ```

3. 在根目录下新建 `.cz-config.js` 和 `commitlint.config.js` 文件并写入配置

   ```js
   // .cz-config.js
   module.exports = {
     // 可选类型
     types: [
       { value: "init", name: "init: 初始化" },
       ...
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
           ...
         ],
       ],
       // subject 大小写不做校验
       "subject-case": [0],
     },
   };
   ```

4. 使用 `husky` 进行强制 git 代码提交规范

   ```bash
   # 安装依赖
   yarn add @commitlint/config-conventional@12.1.4 @commitlint/cli@12.1.4 -D
   yarn add husky@7.0.1 -D
   
   # 初始化husky
   npx husky install
   ```

5. 在 `package.json` 中新增指令，并执行。

   ```bash
   # 新增指令
   "prepare": "husky install"
   
   # 执行命令
   yarn prepare
   ```

6. 新增 `husky` 配置文件，并往里面写入

   ```bash
   # 新增文件
   npx husky add .husky/commit-msg
   
   # 写入配置
   npx --no-install commitlint --edit
   ```

### 依赖

> 运行项目需要使用 `npm` 或 `yarn` 安装项目依赖。

- RESOURCE：外部资源描述

## 文档

- [Vue 框架](https://cn.vuejs.org/) 
- [husky 原生 git 钩子](https://typicode.github.io/husky/#/) 

## Licence

开源协议文档请参阅 [LICENSE](https://github.com/liyupi/app-template/blob/master/LICENSE) 
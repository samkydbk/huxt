# COMPONENTS

**This directory is not required, you can delete it if you don't want to use it.**

The components directory contains your Vue.js Components.

_Nuxt.js doesn't supercharge these components._

组件部分
组件这一块划分为base、framework、page三个目录：

components/
├── base    基本组件
├── framework    布局相关组件
└── page/    各个页面下的组件
    ├── home
    └── ...
这里需要注意在开发 VUE SPA 应用时我们有时候会把页面组件放在 pages 下，我将页面下的组件全部放到了components下，因为 Nuxt.js 框架会读取 pages 目录下所有的 .vue 文件并自动生成对应的路由配置。

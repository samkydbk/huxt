# STATIC

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your static files.
Each file inside this directory is mapped to `/`.
Thus you'd want to delete this README.md before deploying to production.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/assets#static).

资源的存放
官方介绍的很详细，资源的存放有两个目录：static、assets

static : 用于存放应用的静态文件，此类文件不会调用 Webpack 进行构建编译处理。服务器启动的时候，该目录下的文件会映射至应用的根路径 / 下。
举个例子: /static/banner.png 映射至 /banner.png

assets : 用于组织未编译的静态资源如 LESS、SASS 或 JS。

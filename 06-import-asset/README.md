# Webpack 导入资源模块

- 通常前端应用都是使用 JavaScript 来驱动的，所以一般我们使用在使用 webpack 打包时，是将**应用的入口 js 文件作为打包的入口**

  > 06-import-asset 展示了使用 css 文件作为打包入口

- 前端项目中不仅仅只有 js 文件，还会存在着 css、image 等其它文件，我们在使用时，可以通过 import 来导入模块中所需要的资源将相关资源一起管理维护（注: webpack 默认只能处理 js 文件，导入其他资源文件需要添加对应的处理 loader，比如：css-loader,style-loader,file-loader 等）

- webpack 开发思想是将模块文件所需要其它资源组合在一起，比如 js 文件中需要 css 样式时，需要显式导入对应 css 文件，这与传统开发中将 css 文件引入到全局有着明显的区别，这体现了模块化思想，将一组关联的资源打包在一起维护，而不是放到应用的其它地方。
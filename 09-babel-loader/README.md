# babel-loader

webpack 是一个模块打包工作，它默认能够处理 esm，amd 等模块规范的文件。webpack 在打包时会将 esm 中出现的 import 转换为 webpack 运行时提供的`__webpack_require__`方法。

webpack 默认不能转换 js 语法，如果想要在项目中使用的 js 语法新特性，需要使用 babel 来转换代码。`babel-loader`就是是 babel 在 webpack 平台中的转换器，它内部使用了 babel 来转换 js 代码。

# webpack 与 ES 2015

webpack 是一个模块打包工作，它默认能够处理 esm，amd 等模块规范的文件。webpack 在打包时会将 esm 中出现的 import 转换为 webpack 运行时提供的`__webpack_require__`方法。

webpack 默认不能转换 js 语法，如果想要在项目中使用的 js 语法新特性，需要使用 babel 来转换代码。`babel-loader`就是是 babel 在 webpack 平台中的转换器，它内部使用了 babel 生态 来转换 js 代码。

## 在 webpack 中添加 babel 转换

```javascript
{
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
    ];
  }
}
```

通过以上配置方式，可以在 webpack 打包时候，将所有遇到的 js 文件交给 babel-loader 来处理。但是，通过再次打包我们可以发现，代码中的 es6 新特性（箭头函数，const 等），都没有被转换，而是原封不动的输出了。其原因是： **babel 是一个转换 js 代码的平台，需要基于该平台通过不同的插件来转换代码中具体的特性**。

## 添加转换插件

为 babel 转换添加插件：`@babel/preset-env`,`@babel/preset-env`是一个转换插件集合，里面包含了 js 全部最新特性的转换插件。

```javascript
{
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            //  或者通过babel配置文件.babelrc来设置
            presets: ["@babel/preset-env"],
          },
        },
      },
    ];
  }
}
```

## babel 添加 polyfill

 - babel-polyfill
 - corejs3
 - @babel/transform-runtime
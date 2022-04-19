# 文件资源加载器(file-loader)

- webpack 的大多数加载器都类似`css-loader`将资源模块转换 js 代码的实现方式去工作，但是类似图片、字体等文件无法用 js 方式表示，对于这一类的资源文件我们需要使用文件资源加载器-`file-loader`

- webpack 的工作模式是将js文件所需依赖导入进来，本例中通过`import icon from './icon.png'` 来导入对应的图片文件，导入后`icon`就表示`icon.png`打包后在打包目录的文件路径以及名称

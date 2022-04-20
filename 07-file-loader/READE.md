# 文件资源加载器(file-loader)

- webpack 的大多数加载器都类似`css-loader`将资源模块转换 js 代码的实现方式去工作，但是类似图片、字体等文件无法用 js 方式表示，对于这一类的资源文件我们需要使用文件资源加载器-`file-loader`

- webpack 的工作模式是将 js 文件所需依赖导入进来，本例中通过`import icon from './icon.png'` 来导入对应的图片文件，导入后`icon`就表示`icon.png`打包后在打包目录的文件路径以及名称

- 当我们在项目的根目录启动服务预览打包结果，发现页面中引用的资源找不到（实际存在与 dist 目录下），可以设置`publicPath`来为图片设置一个相对于启用服务路径的前缀。

  > 对于按需加载(on-demand-load)或加载外部资源(external resources)（如图片、文件等）来说，output.publicPath 是一个很重要的选项，此选项指定在浏览器中所引用的输出目录资源（比如 dist）对应的公开 URL。

  > `publicPath`可以是一个相对路径（代表着静态资源相对于服务的路径），或者一个绝对路径（cdn 地址）作为资源 URL 前缀，该值通常需要要以`/`结尾。

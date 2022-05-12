# url-loader

在介绍`url-loader`之前，首先介绍一下[Data URLs](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)。

## Data URLs 是什么

**Data URLs** 是以 `data:` 开头的 URL 协议，可以通过该协议形式来表示文本或文件

**Data URLs** 由四部分组成：前缀（data:）,数据类型（MIME 类型），数据编码，数据，数据本身。

```
data:[mediaType][;base64],<data>
```

基础示例：

用 data URLs 表示一段 html 文本：

```
data:text/html;chartset=utf8,<h1>html content</h1>
```

```
data:text/html,<script>alert('hi');</script>
```

对于一些图片或者字体不能通过文本表示的，可以将文件通过 base64 编码后表示。例如：

```
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAqhJREFUWEfF
l01IVFEUx3/nzowzjoZJJRUtwspQqE3LKPpYC0W4CqJd0DL7ECFGIYQwsU0LF0GLaNMmqEXLIEha
CBEk1SJaiFSUKOqMM2/mnnjjPHujo++NKe8t373n//+9d885914h4kfC+vf0aGzqAA05JZmNEU8J
pigYNz6u2CXFFuM4NkX++yQOz6UURjsQ4ExG41OQTjg0hRH05tgiC18aWWRQ7EZxGwJ0ZbTZODSV
WP7Seh9HKe5ZYmF8VHLrxa4L0H5HW5Ix0vWa1pqfzJL78FBma43VBOjs131bYezXMDnyn0ZlZrXu
GoBjfdpaNKS2GsDVSzcwNzEgWb92FcCJAU1nC7Rsh7mnOZ9jdsqXE/8AMmoOF9iVEOLbCVDK43wd
kd+exwrA0du6w8Rp3k5zT9u/FMsAPRrrPEJbWHNRLlv4LMJE2Bj/PP9fKAMczGiq0aE1SEyEQ5R4
izCE0g+MqGEkKK5m+SX4MzkohTJA2JoXyxjwSg0vVekwyhs17N8MQL5E9tt9mSsDdPTq7liSRJCQ
H0As90Q4a4WTQXG1xr1lKAMcv6ltTgOxICGxXAXOqeGKWKY3+/WuT6JA6eMD+VUG6LqlezVB4Mbk
zvWMxfJU4SeG3iDwmjngoJPD8qNuACzPBObVcK0MA6MYhuuFED9A2CVYaR6WaZQLYtipyhPvvQrX
EV6EgalagrBJuAJQ4jzCY4TTCHmrtMeERbW8VuEiwvsgiKokDFuGflFxIQxDajiFUqjkR3elMm4E
AVSVYdhGtFpULN3AmAqPUGYE7lrhkgjjQQDib0T1tuI1IEofimOFd2HM17RiVzDazcgliHo7dhmi
PZBUFjbSI5mXXJEeSj2IzfSG9Uqv7mO5JxTpxcSDiPRq5v+lkV1Og1rq/47/BahfTDAYNPOUAAAA
AElFTkSuQmCC
```

## url-loader 是什么

**url-loader** 就是将文件转换为 data URLs 格式的 loader。 相比于 file-loader 将文件复制到输出目录中，然后通过网络请求加载的方式，url-loader 直接将文件以 data URL 的形式打包进输出文件中，从而减少了网络请求次数。

## url-loader 使用注意事项

- 大文件不适合使用 data URLs 的形式来表示。因为大文件通过 base64 的格式表示后，将使得输出文件体积变大，从而影响加载速度。

- 如果配置大文件还是直接复制到输出目录时，注意安装 file-loader 包。 url-loader 内部会使用。

## url-loader 最佳实践

- 小文件使用 data URLs，减少请求次数。
- 大文件单独提取存放，提高加载速度。

url-loader 提供了相应的配置项目来实现上述方案：

```javascript
{
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            // 10KB以下转换为data URLs，否则通过file-loader复制到输出目录中
            limit: 10 * 1024, // 10kb
          },
        },
      },
    ];
  }
}
```

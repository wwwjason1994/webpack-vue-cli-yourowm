# vue-cli-yourself
a vue-cli your owm ,use similar json-object to configure webpack

> webpack:3.10 | vue:2.5.13

这是一个适配多页面和自动化配置的基于webpack的vue工程化脚手架工具<br>
特点在于用类json对象配置webapck，实现半自动的webpack配置，而不用频繁改动webpack.config.js<br>
通过学习本项目的构建过程逐步了解webpack常用配置项，一步一步尝试编写出一个属于自己的vue-cli脚手架工具


## 教程
> 通过从头学习本github 相关的一些列文章逐步学会使用webpack搭建出可配置的半自动化vue工程构建项目。

[从搭建vue-脚手架到掌握webpack配置（一.基础配置）](https://juejin.im/post/5a531f4c6fb9a01cb80f926f)<br>
[从搭建vue-脚手架到掌握webpack配置（二.插件与提取)](https://juejin.im/post/5a55b7c851882573315c4287)<br>
[从搭建vue-脚手架到掌握webpack配置（三.多页面构建）](https://juejin.im/post/5a5cb391f265da3e317e2579)<br>
[从搭建vue-脚手架到掌握webpack配置（四.自动化封装）](https://juejin.im/post/5a8453ae6fb9a0636263d968)<br>

## starts
run :
```
npm install
npm run build
```

clean dist directory :
```
npm run clean
```


clean and build :
```
npm run c-b
```

## usage
### json式配置
index.js 内的示例配置：

```
 const config = {
    page:{
        index:'./src/main.js',
        home: ['./src/home.js','home page']
    },
    defaultTitle:"this is all title",//页面的默认title
    externals : {//大三方外部引入库声明
        'jquery':'window.jQuery'
    },
    cssLoader : 'less',//记得预先安装对应loader
    // cssLoader : 'less!sass',//可以用!号添加多个css预加载器
    usePostCSS :  true, //需要提前安装postcss-loader
    toExtractCss : true,

    assetsPublicPath: '/',//资源前缀、可以写cdn地址
    assetsSubDirectory: 'static',//创建的的静态资源目录地址

    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,//调试开启时是否自动打开浏览器
    
    uglifyJs : true,//是否丑化js
    sourceMap : true,//是否开启资源映射
    plugins:[]//额外插件
}
module.exports = config;
```
注意：配置项中的路径都相对于跟目录

#### 配置项说明
page：就如webpack.config里面的entry,进行了改良，如果属性是数组的话，第二个参数是html的标题（title）

defaultTitle：是所有页面默认的title

externals：如注释

cssLoader：要使用的css预加载器，可以用```!```分割设置多个加载器，使用的同时记住```npm install less-loader```安装对应的loader

usePostCss：是否使用postcss,也是要预先安装post-loader

toExtractCss：是否抽取css文件

assetsPublicPath：资源的公共地址前缀，页面的所有资源引入会指向该地址，可以是一个cdn的域名。

assetsSubDirectory：要在根目录下创建一个static目录存放不被webpack编译的文件（静态文件），而```assetsSubDirectory```值是dist目录下的静态资源地址，如值是```static```的话，build之后，```~\static```目录下的文件就会被复制到```dist/static```目录下

host \port \autoOpenBrower：如注释

uglifyJs \sourceMap ：如注释

plugins：可以new一些插件进去
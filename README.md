## 项目名：uni-app-ts

## 项目文件目录说明
```javascript
src
  -- api 后端api接口统一管理文件夹
  -- lib 引入的第三方库
    -- colorui 第三方UI组件库
  -- pages 页面文件夹
  -- utils 工具类文件夹
    -- minins.ts 混入vue文件，在需要混入的vue文件中，使用extends继承语法，继承即可
    -- request.ts 封装了flyio网络请求库，在这里不使用axios，因为axios不兼容小程序端，所以使用flyio，也可以引入axios，通过uni-app的平台编译语法，引入不同的模块
  -- store vuex
  -- static 静态资源目录，在pages里的页面引入图片，通过`/static/images/**`引入即可，以`/static`为根目录
```

##  项目技术
1. 使用uni-app框架开发
2. 引入typescript语法
3. 引入colorUI组件库
4. request请求使用flyio库

## 组件的命令规则
1. 组件的文件命名，不能使用单个单词，需要使用两个及多个单词的命名方式，使用小写的形式，用中划线 - 作为连接。
   `例：tabbar-item`
2. 公共的、通用各平台的组件放在src目录下的components目录中。
3. 单个平台使用的组件放在各自平台规定的目录中。
4. 不是公共的，单个页面使用的组件，放在该页面目录同级的components目录中。

## 项目接口预定义文档
使用在线api管理文档 - apizza<br />
访问地址：https://apizza.net/<br />

## 项目运行方式
1. 使用HBuilderX工具启动项目<br />
	下载地址：https://www.dcloud.io/hbuilderx.html
2. 使用命令行工具，在前端目录文件的根目录启动命令行工具<br />
	微信小程序端编译命令<br />
	开发环境：`npm run dev:mp-weixin`<br />
	线上环境：`npm run build:mp-weixin`<br />
	开发环境的小程序访问根目录中的 `dist/dev/mp-weixin` 文件夹即可	<br />
  线上环境的小程序访问根目录中的 `dist/build/mp-weixin` 文件夹即可	<br />

## 存在的问题
1. 在vue文件中使用`wx.`的前缀的API在HBuilderX工具中运行项目，会报错，没有找到wx模块。在命令行模式中使用 `npm` 命令编译项目，不会发生报错，且项目能编译成功。

## 项目名：管家

## 项目文件目录说明
```javascript
src
  -- api 后端api接口统一管理文件夹
  -- lib 引入的第三方库
  -- pages 页面文件夹
  -- utils 工具类文件夹
  -- store vuex
  -- static 静态资源目录
```

##  项目技术
1. 使用uni-app框架开发
2. 引入colorUI组件库

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

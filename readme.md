#api-jst
在编码前后端分离的项目过程中，往往我们要为后端编码服务所费心
每个服务对应一个前端的方法或者前端的类，而这个过程往往可以通过自动化来完成
==api-jst会帮助我们完成这个过程==

#我们如何使用
--------
####Step1.安装api-jst
```bash
  npm install api-jst -g
```
####Step2.在需要使用到的项目中初始化
```bash
  mkdir demo&&cd demo
  api-jst init
```
####Step3.初始化以后，会存在相应的配置文件和项目模板文件
```
 demo              测试文件目录
 -api-jst          配置文件目录
 --temp            配置文件模板目录
 ---constant.ejs   配置常量模板
 ---service.ejs    配置服务端模板
 --config.js       配置文件详情
 ```

####Step4.配置config.js
 [ejs](https://github.com/tj/ejs) 详细模板引擎编写方法
 ``` javascript
 template: "/api-jst/temp/service.ejs",                服务地址模板
 urlTemplate: "/api-jst/temp/constant.ejs",            常量模板
 output: "/api-jst/output/${name}ApiService.js",       输出文件路径
 urlConstantOutput: "/api-jst/output/urlConstant.js",  常量输出路径
 api: "http://172.29.20.41:9090/template/index",       服务数据读取地址
 ```


####Step5.开始导出
 ```bash
   api-jst
 ```
###版本还在继续发展和升级中，致力于打造简单便捷的工具


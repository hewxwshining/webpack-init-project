### 一、webpack 使用
**模块处理：将加载的文件处理成大部分浏览器都可以兼容的原生的js文件**

注：Webpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要使用 loader 进行转换

例如：使用在应用中添加CSS文件 ，首先添加依赖，用命令来安装 css-loader 和 style-loader(全局安装需要参数 -g)

    npm install css-loader style-loader

webpack.config.js文件配置CSS模块

    module:{
    	loaders:[{
    		test:/\.css$/,
    		loader:['style-loader','css-loader']
    	}]
    }

    //1. test：使用正则表达式检查文件是否是loader执行的文件；
    //2. loader：预处理文件，处理顺序是从右往左；
    //3. css-loader：遍历 CSS 文件，找到 url() 表达式后处理引入的内容；
    //4. style-loader：将require('./index.css')中的CSS样式直接注入到主页中的style标签中；
    

### 二、webpack-dev-server介绍及配置
webpack-dev-server是webpack官方提供的**一个小型Express服务器**。使用它可以为webpack打包生成的资源文件提供web服务。webpack-dev-server官方文档
webpack-dev-server 主要提供两个功能：

* 为静态文件提供服务
* 自动刷新和热替换(HMR)

用下面一个简单项目的创建与运行的流程为例

**基本流程**

1. 在命令下进入到项目中，使用 **npm init** 初始化项目，得到 **package.json** 文件

2. 全局安装 **webpack-dev-server**
    
    npm i webpack-dev-server -g

3. 添加 **webpack-dev-server --save-dev** 项目依赖

	npm i webpack-dev-server

4. 添加 webpack 配置文件 **webpack.config.js**

5. 启动 **webpack-dev-server**即可启动服务，在地址栏输入：http://localhost：8080即可查看页面 

6. 使用 **npm start** 启动服务，只需要在package.json中 **scripts**字段中添加指令即可
	

> "scripts": {
    "start": "webpack-dev-server --progress --color"
  },
	


**webpack.config.js基本配置**
    
    var path = require('path');
    module.exports = {
    	entry:{
    		admin:'./admin/index.js',
    		index:'./index/index.js'
    	},
    	output:{
    		path: path.join(__dirname,'dist'),
    		filename:'[name].bundle.js'，
			publicPath:'/dist/'
    	},
    // module:{
     //	loaders:[{
     //		test:/\.css$/,
     //		loader: ['style-loader','css-loader']
     //	}]
     //}
    }
 * **publicPath:** 服务器启动时，访问的目录地址，使用webpack-dev-server时是必须有该参数；

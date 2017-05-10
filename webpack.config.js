
var webpack = require("webpack");
//处理路径问题
var path = require("path");

var sourcedir = path.resolve( __dirname, 'src' );// 源码和资源文件的放置位置
var outputdir = path.resolve( __dirname, 'dist' );// 编译结果的放置位置

/*
*	可以将html打包到dist目录下，
*	并且html页面中加载指定的js，
*	压缩html代码
*/
var HtmlWebpackPlugin = require("html-webpack-plugin");
/*
*	提取css为单独文件
*	plugin配置new ExtractTextPlugin("[name].css") 默认为package.json中main名称
*/
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//清空输出目录插件
var CleanWebpackPlugin = require("clean-webpack-plugin");

//开发模式，在webpack.config.js中使用
var __DEV__ = process.env.NODE_ENV !== "production";
//解决单独修改js或css时只影响单独的文件
var WebpackMd5Hash = require("webpack-md5-hash");

// css自动加入前缀
var precss = require("precss");
var autoprefixer = require("autoprefixer");



module.exports={
	resolve: {
        // 让less-loader等插件能找到以~相对定位的资源
        modules: [sourcedir, 'node_modules']
    },
	entry : {
		bundle : "./src/html/index.js",
		lib : ["react","react-dom","react-router"]
	},
	output : {
		//path : "/" 绝对路径，在window中表示当前盘符，如D://; wepack命令后会自动增加目录dist
		//这样使用path的时候HtmlWebpackPlugin中index.html加载bundle.js路径有问题，解决办法使用path.resolve(__dirname,"./dist")
		//path : path.resolve(__dirname,"./dist"),
		path : outputdir,
		filename : __DEV__ ? "[name].js" : "[name][chunkhash:8].js",
		chunkFilename : "[chunkhash].chunk.js"
	},
	module : {
		rules : [
			{
				test : /\.jsx?$/,
				exclude : /node_modules/,
				use : [
					{
						loader : "babel-loader",
						options : {
							presets : [
								["babel-preset-es2015",{modules:false}],
								"babel-preset-react"
							]
						}
					}
				]
			},
			{
				
				test : /\.(css|less)$/,
				use : ExtractTextPlugin.extract({
					fallback : "style-loader",
					use : [
						{
							loader : "css-loader",
							options: {
				              modules: true,
				              importLoaders: 1,
				              localIdentName: '[hash:base64:5]'
				           }
						},
						//解决css中url报错 Module not found: Error: Can't resolve 'images/footer-sprite.png'
						{
							loader : "resolve-url-loader"
						},
						{
							loader : "postcss-loader"
						},
						{
							loader : "less-loader"
						}
					]
				})
			},
			{
				test : /\.(?:jpg|jpeg|gif|png|svg|ico)$/,
				exclude: '/node_modules/',
				use : [
					{
						loader : "url-loader",
						options : {
							limit : 8912,
							name : "images/[hash].[ext]"
						}
					}
				]
			},
			{
				test : /\.html$/,
				use : [
					{
						loader : "html-withimg-loader"
					}
				]
			},
		]
	},
	/*module : {
		loaders : [
			//样式加载
			{
				test: /\.(css|less)$/, 
				//loader: 'style-loader!css-loader!postcss-loader!less-loader'
				//webpack 2以后规则
				loader : ExtractTextPlugin.extract({
					fallback : "style-loader",
					use : ["css-loader","postcss-loader","less-loader"]
				})
			},
			//图片加载
			{
			  test: /\.(?:jpg|jpeg|gif|png|svg|ico)$/,
			  //图片大小小于8k，使用base64形式直接显示图片
			  loader: "url-loader?limit=8192&name=images/[hash].[ext]" 	
			},
			//处理html页面中图片
			{
				test : /\.html$/,
				loader : "html-withimg-loader"
			},

		]
	},*/
	plugins : [
		new CleanWebpackPlugin([outputdir]),
		/*new webpack.optimize.CommonsChunkPlugin('common'),*/
		new ExtractTextPlugin({
            filename : __DEV__ ? "bundle.css" : "bundle[contenthash:8].css",
            allChunks: true
		}),
		new webpack.LoaderOptionsPlugin({
			options : {
				postcss : function(){
					return [precss,autoprefixer];
				}
			}
		}),
		new WebpackMd5Hash(),
		new HtmlWebpackPlugin({
			filename : "index.html",
			chunk : ["bundle","lib"],
			template : "./src/html/index.html",
			minify : __DEV__ ? false : {
	    		collapseWhitespace: true,
		      	collapseInlineTagWhitespace: true,
		      	removeRedundantAttributes: true,
		      	removeEmptyAttributes: true,
		      	removeScriptTypeAttributes: true,
		      	removeStyleLinkTypeAttributes: true,
		      	removeComments: true
	    	}
		}),
	]
}

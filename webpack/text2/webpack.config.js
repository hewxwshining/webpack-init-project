var path = require('path');
module.exports = {
	entry:{
		admin:'./admin/index.js',
		index:'./index/index.js'
	},
	output:{
		path: path.join(__dirname,'dist'),
		filename:'[name].bundle.js',
		publicPath:'/dist/'
	},
	// module:{
 //    	loaders:[{
 //    		test:/\.css$/,
 //    		loader: ['style-loader','css-loader']
 //    	}]
 //    }
}
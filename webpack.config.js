var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		finite: './demo/finite/index.js',
		infinite: './demo/infinite/index.js'
	},
	output: {
		filename: '[name].js',
		chunkFilename: '[id].js',
		path: path.join(__dirname, 'demo/build'),
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					/* vue-loader option setting */
				}
			},
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.min.js',
			'virtual-list': path.resolve(__dirname, './src')
		}
	},
	devtool: '#source-map'
};

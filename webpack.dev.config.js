var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './demo/index.js',
	output: {
		path: './demo',
		filename: 'build.js'
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
			'vue': 'vue/dist/vue.js',
			'virtual-list': path.resolve(__dirname, './src')
		}
	},
	devtool: '#source-map'
};

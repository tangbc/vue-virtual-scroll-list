var path = require('path');
var webpack = require('webpack');

var config = {
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
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.js',
			'virtual-list': path.resolve(__dirname, './src')
		}
	},
	devtool: '#source-map'
};

if (process.env.NODE_ENV === 'production') {
	config.entry = './src/index';

	config.output = {
		path: 'dist',
		libraryTarget: 'umd',
		library: 'VirutalList',
		filename: 'vue-virtual-scroll-list.js'
	};

	config.externals = {
		vue: {
			amd: 'vue',
			root: 'Vue',
			commonjs: 'vue',
			commonjs2: 'vue'
		}
	}

	config.plugins = [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	];
}

module.exports = config;

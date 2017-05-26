var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: './dev/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {

          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "demo"),
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.entry = './src/index.js'

  module.exports.externals = {
    "lodash": "lodash",
    "vue": "vue"
  }

  module.exports.output = {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    library: 'VueVirtualScrollList',
    libraryTarget: 'umd'
  }
  module.exports.devtool = '#source-map'
  module.exports.module.rules[0].options.loaders = {
    css: ExtractTextPlugin.extract({
      use: 'css-loader',
      fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
    }),
    less: ExtractTextPlugin.extract({
      use: 'css-loader!less-loader',
      fallback: 'vue-style-loader'
    })
  }
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new ExtractTextPlugin("style.css")
  ])
}

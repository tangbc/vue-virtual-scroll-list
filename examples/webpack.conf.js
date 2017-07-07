var path = require('path')
var webpack = require('webpack')
var entries = require('./entries')

var multiEntry = {}
entries.forEach(function (entry) {
    multiEntry[entry] = path.resolve(__dirname, entry)
})

// This config for building examples
module.exports = {
    entry: multiEntry,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js',
            'vue-virtual-scroll-list': path.resolve(__dirname, '../index.js')
        }
    },
    devtool: '#source-map'
}

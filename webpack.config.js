var path = require('path')
var webpack = require('webpack')

// This config for building examples
module.exports = {
    entry: {
        finite: './examples/finite/index.js',
        infinite: './examples/infinite/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'examples/build'),
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
            'virtual-list': path.resolve(__dirname, './index.js')
        }
    },
    devtool: '#source-map'
}

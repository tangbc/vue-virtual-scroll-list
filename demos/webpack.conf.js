const path = require('path')
const { lstatSync, readdirSync } = require('fs')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

const isDirectory = (source) => lstatSync(source).isDirectory()
const getDirectories = (source) => readdirSync(source).map((name) => path.join(source, name)).filter(isDirectory)
const isDemoDirectory = (source) => !['dev', 'common'].includes(source)
const demoDirectorys = getDirectories('demos').map((demo) => demo.split('/').pop()).filter(isDemoDirectory)

console.log('\x1b[36m', `Building demos: [ ${demoDirectorys.join(', ')} ].`, '\x1b[0m')

let multiConfigs = []
demoDirectorys.forEach((entry) => {
    const _entry = path.resolve(__dirname, entry)
    multiConfigs.push({
        name: entry,
        entry: `${_entry}/main.js`,
        output: {
            filename: 'build.js',
            path: path.resolve(__dirname, _entry)
        }
    })
})

module.exports = multiConfigs.map((config) => {
    return Object.assign(config, {
        stats: 'minimal',

        watch: !isProduction,

        performance: {
            hints: false
        },

        mode: isProduction ? 'production' : 'development',

        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.js',
                'vue-virtual-scroll-list': path.resolve(__dirname, '../src/index.js')
            }
        },

        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                title: config.name,
                template: path.resolve(__dirname, './demo.html')
            })
        ],

        devtool: '#source-map',

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
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'vue-style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[local]'
                            }
                        }
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'less-loader'
                    ]
                }
            ]
        }
    })
})

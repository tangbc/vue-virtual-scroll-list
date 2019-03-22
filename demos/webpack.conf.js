const path = require('path')
const { lstatSync, readdirSync } = require('fs')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source => readdirSync(source).map((name) => path.join(source, name)).filter(isDirectory)
const demoDirectorys = getDirectories('demos').map((demo) => demo.split('/').pop())

console.log('\x1b[36m', `Building demos: [${demoDirectorys.join(', ')}].` ,'\x1b[0m')

let multiConfigs = []
demoDirectorys.forEach((entry) => {
    const _entry = path.resolve(__dirname, entry)
    multiConfigs.push({
        entry: `${_entry}/main.js`,
        output: {
            filename: 'build.js',
            path: path.resolve(__dirname, _entry)
        }
    })
})

const isProduction = process.env.NODE_ENV === 'production'

module.exports = multiConfigs.map((config) => {
    return Object.assign(config, {
        stats: 'minimal',

        mode: isProduction ? 'production' : 'development',

        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.js',
                'vue-virtual-scroll-list': path.resolve(__dirname, '../index.js')
            }
        },

        plugins: [
            new VueLoaderPlugin()
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
                            presets: ['env']
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
                            localIdentName: '[local]_[hash:base64:8]'
                            }
                        }
                    ]
                }
            ]
        }
    })
})

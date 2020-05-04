const path = require('path')

// https://cli.vuejs.org/config/#global-cli-config
module.exports = {
  publicPath: './',

  outputDir: path.resolve(__dirname, '../docs'),

  productionSourceMap: false
}

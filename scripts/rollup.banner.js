const packageJson = require('../package.json')
const version = packageJson.version
const homepage = packageJson.homepage

export default `
/*!
 * vue-virtual-scroll-list v${version}
 * open source under the MIT license
 * ${homepage}
 */
`

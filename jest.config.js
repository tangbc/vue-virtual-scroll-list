module.exports = {
  transformIgnorePatterns: [
    'node_modules'
  ],
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageReporters: [
    'lcov',
    'html',
    'text-summary',
  ],
  collectCoverageFrom: [
    'src/index.js'
  ],
  // testRegex: '/test/base.test.js?$'
}

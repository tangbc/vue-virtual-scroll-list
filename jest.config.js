module.exports = {
  transformIgnorePatterns: [
    '<rootDir>/node_modules'
  ],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: [
    'lcov',
    'html',
    'text-summary',
  ],
  collectCoverageFrom: [
    '<rootDir>/src/*.js'
  ],
  moduleFileExtensions: [
    'js',
    'vue'
  ],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  // testRegex: 'scroll.test.js?$'
}

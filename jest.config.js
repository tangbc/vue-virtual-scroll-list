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
        '**/index.js',
        '!**/node_modules/**',
        '!**/test/**',
    ],
    // testRegex: '/test/base.test.js?$'
}

import ProductionConfig from './rollup.production'

// development mode just rewrite from production config.
export default Object.assign({}, ProductionConfig, {
  output: {
    ...ProductionConfig.output,
    file: './dev/index.js',
    sourcemap: true,
    banner: '/* eslint-disable */' // disable eslint when bundle with docs.
  }
})

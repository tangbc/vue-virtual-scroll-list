import babel from 'rollup-plugin-babel'
import bannerString from './rollup.banner'

export default {
  external: ['vue'],
  input: './src/index.js',
  output: {
    format: 'umd',
    file: './dist/index.js',
    name: 'VirtualList',
    // exports: 'named',
    sourcemap: true,
    globals: {
      vue: 'Vue',
    },
    banner: bannerString.replace(/\n/, '')
  },
  plugins: [
    babel()
  ]
}

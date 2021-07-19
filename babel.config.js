const presets =
  process.env['NODE_ENV'] !== 'production'
    ? [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
          },
        ],
        '@babel/preset-typescript',
      ]
    : null

const plugins = [['macros']]
if (process.env['NODE_ENV'] !== 'production') {
  plugins.push(['babel-plugin-transform-vite-meta-env'])
}

module.exports = { presets, plugins }

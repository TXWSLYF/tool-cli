const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');

module.exports = merge(baseConfig, {
  devtool: 'inline-source-map',
  output: {
    filename: `tool.js`,
  },
});

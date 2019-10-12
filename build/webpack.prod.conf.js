const merge = require('webpack-merge');
const util = require('./util');
const InsertCodePlugin = require('../plugin/InsertCode');
const baseConfig = require('./webpack.base.conf');

module.exports = merge(baseConfig, {
  mode: 'production',
  // devtool: "inline-source-map",
  output: {
    filename: 'tool.min.js',
  },
  optimization: {
    // 关闭代码压缩
    // minimize: false,
  },
  plugins: [
    new InsertCodePlugin({
      header: util.header,
      footer: util.footer,
      filename: 'tool.min.js',
    }),
  ],
});

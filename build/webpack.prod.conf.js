const merge = require('webpack-merge');
const util = require('./util');
const InsertCodePlugin = require('../plugin/InsertCode');
const baseConfig = require('./webpack.base.conf');
const pkg = require('../package.json');

const filename = `${pkg.name}.min.js`;

module.exports = merge(baseConfig, {
  mode: 'production',
  // devtool: "inline-source-map",
  output: {
    filename: filename,
  },
  optimization: {
    // 关闭代码压缩
    // minimize: false,
  },
  plugins: [
    new InsertCodePlugin({
      header: util.header,
      footer: util.footer,
      filename: filename,
    }),
  ],
});

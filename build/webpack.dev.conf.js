const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.conf");
const pkg = require("../package.json");

module.exports = merge(baseConfig, {
  devtool: "inline-source-map",
  output: {
    filename: `${pkg.name}.js`
  }
});

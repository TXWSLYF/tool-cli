const pkg = require('../package.json');

// tool-container 全局定义的工具定义函数
const TOOL_LOADER_DEFINE = 'TOOL_LOADER_DEFINE';

const name = pkg.name;
const version = pkg.version;

exports.header = `
(function() {
`;

exports.footer = `
window['${TOOL_LOADER_DEFINE}'] &&
window['${TOOL_LOADER_DEFINE}'].define &&
window['${TOOL_LOADER_DEFINE}'].define(
  '${name}',
  '${version}',
  ${name}.default,
);
})();
`;

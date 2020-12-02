const { join } = require('path');
const { alias, configPaths } = require('react-app-rewire-alias');

const { compilerOptions } = require('./tsconfig.paths.json');

const dirName = __dirname;
const tsConfigPath = join(dirName, 'tsconfig.paths.json');
const pathsBaseUrl = join(dirName, compilerOptions.baseUrl);

const paths = configPaths(tsConfigPath);
const pathsParsed = Object.entries(paths).reduce(
  (pathsObject, [currentAliase, currentPath]) =>
    Object.assign(pathsObject, {
      [currentAliase]: join(pathsBaseUrl, currentPath),
    }),
  {},
);

function override(config) {
  alias(pathsParsed)(config);
  return config;
}

module.exports = override;

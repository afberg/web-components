const defaultConfig = require('@open-wc/demoing-storybook/default-storybook-webpack-config.js');
const path = require('path');
module.exports = ({ config }) => {
  const conf = defaultConfig({ 
    config, 
    transpilePackages: ['lit-html', 'lit-element', '@open-wc']
  });
  conf.module.rules.push({
    test: /\.tsx?$/,
    loader: "ts-loader"
  });
  conf.resolve.extensions = ['.ts', ...conf.resolve.extensions]
  conf.resolve.alias = {...conf.resolve.alias,
    '@styles': path.resolve(__dirname, '../src/styles'),
    '@services': path.resolve(__dirname, '../src/services'),
    '@components': path.resolve(__dirname, '../src/components')
  }
  return conf;
}
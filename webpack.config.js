const { resolve } = require('path');
const createDefaultConfig = require('@open-wc/building-webpack/modern-config');


module.exports = createDefaultConfig({
  input: resolve(__dirname, './index.html'),
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  }
});

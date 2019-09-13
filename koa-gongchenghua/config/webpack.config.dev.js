const webpaceMerge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');

const webpackConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
  stats: { children: false }
}

module.exports = webpaceMerge(baseWebpackConfig, webpackConfig);
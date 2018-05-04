const webpack = require('webpack')
const openBrowserWebpackPlugin = require('open-browser-webpack-plugin')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'webpack-bundle-dist.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader'}
    ]
  },
  mode: 'production',
  optimization: {
    minimize: true
  },
  plugins: [
    new openBrowserWebpackPlugin({ url: 'http://localhost:8888' }),
    new htmlWebpackPlugin({
      template: './index.html',
      // filename: './index.html'
    })
    // new extractTextPlugin('bundle.[hash:4].css')
  ]
}

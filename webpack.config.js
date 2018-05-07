const webpack = require('webpack')
const openBrowserWebpackPlugin = require('open-browser-webpack-plugin')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: path.resolve('./src/index.jsx'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'webpack-bundle-dist.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['react-hot-loader/babel'],
          }
        },
        exclude: /node_modules/
      },
    ]
  },
  mode: 'production',
  optimization: {
    minimize: true
  },
  plugins: [
    new openBrowserWebpackPlugin({ url: 'http://localhost:8888' }),
    new htmlWebpackPlugin({
      template: './src/index.html',
    })
    // new extractTextPlugin('bundle.[hash:4].css')
  ]
}

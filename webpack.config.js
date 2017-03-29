"use strict";

const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-sourcemap',
  entry: {
    index: path.join(__dirname, 'src', 'index.client.js'),
    vendor: path.join(__dirname, 'src', 'vendor.client.js')
  },
  devServer: {
    inline: true,
    hot: true,
    compress: true,
    port: 3333,
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: {
      index: '/index.html'
    }
  },
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    filename: '[name].bundle.js',
    publicPath: '/dist/js/'
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, 'src'),
        exclude: /\.sass$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: 'babel_cache',
            presets: ['react', 'es2015']
          }
        }
      },
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};

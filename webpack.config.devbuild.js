'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin(
  { filename: '../styles/[name].css' });

module.exports = {
  devtool: 'inline-sourcemap',
  entry: {
    index: path.join(__dirname, 'src', 'index.client.js'),
    vendor: path.join(__dirname, 'src', 'vendor.client.js')
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
            presets: ['react', 'es2015', 'stage-2']
          }
        }
      },
      {
        test: /\.sass$/,
        use: extractSass.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    extractSass,
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};

"use strict";

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin(
  { filename: '../styles/css/[name].css' });

module.exports = {
  entry: path.join(__dirname, 'src', 'index.client.js'),
  output: {
    path: path.join(__dirname, 'src', 'public', 'js'),
    publicPath: "/js/",
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: path.join(__dirname, 'src'),
      exclude: /\.sass$/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: 'babel_cache',
          presets: ['react', 'es2015']
        }
      }
    }, {
      test: /\.sass$/,
      use: extractSass.extract({
        use: ['css-loader', 'sass-loader']
      })
    }]
  },
  plugins: [
    extractSass,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ]
};

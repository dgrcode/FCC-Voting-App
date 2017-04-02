"use strict";

const path = require('path');
const webpack = require('webpack');
const express = require('express');

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
    },
    setup (app) {
      app.use('/public/vendor/',
        express.static(path.join(__dirname, 'dist', 'vendor')));
      app.use('/public/styles/',
        express.static(path.join(__dirname, 'dist', 'styles')));
      app.use('/public/fonts/',
        express.static(path.join(__dirname, 'dist', 'fonts')));
    }
  },
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    publicPath: 'public/js',
    filename: '[name].bundle.js'
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

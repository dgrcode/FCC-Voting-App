"use strict";

const webpack = require('webpack');
const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin')
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

const extractSass = new extractTextPlugin({filename: "../styles/css/[name].css"});

module.exports = {
  devtool: 'inline-sourcemap',
  entry: {
    index: path.join(__dirname, 'src', 'index.client.js'),
    poll: path.join(__dirname, 'src', 'poll.client.js'),
    newPoll: path.join(__dirname, 'src', 'newpoll.client.js')
  },
  output: {
    path: path.join(__dirname, 'src','public','js'),
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
        },
      },
      {
        test: /\.sass$/,
        use: extractSass.extract({
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [
    extractSass,
    new CommonsChunkPlugin({
      name: 'common',
      chunks: ['index', 'poll', 'newPoll'],
    })
  ]
};

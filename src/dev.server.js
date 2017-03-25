var express = require('express');
var webpack = require('webpack');
var middleware = require('webpack-dev-middleware');

var config = require('../webpack.config');
var app = express();

console.log(config);

app.use(middleware(webpack(config), {
  publicPath: config.output.publicPath
}));


var server = app.listen(5020);

const express = require('express');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');

const config = require('../webpack.config');
const app = express();

console.log(config);

app.use(middleware(webpack(config), {
  publicPath: config.output.publicPath
}));


app.listen(5020);

const express = require('express');
const session = require('express-session');
const mongo = require('mongodb');
const passport = require('passport');
const path = require('path');
const http = require('http');
const WebSocket = require('ws');
const socketHandler = require('./server/socket/handler.js');
const bodyParser = require('body-parser');
const login = require('./server/routes/login.js');
const routes = require('./server/routes');

const app = express();
app.use(session({
  secret: 'votingapp',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(login);
app.use('/public/js/',
  express.static(path.join(__dirname, '../dist', 'js')));
app.use('/public/vendor/',
  express.static(path.join(__dirname, '../dist', 'vendor')));
app.use('/public/styles/',
  express.static(path.join(__dirname, '../dist', 'styles')));
app.use('/public/fonts/',
  express.static(path.join(__dirname, '../dist', 'fonts')));
app.use(routes);
app.use(bodyParser.json());
app.set('view engine', 'pug');

const server = http.createServer(app);
const wss = new WebSocket.Server({
  perMessageDeflate: false,
  port: process.env.PORT_WS,
  server
});

// Link the websockets server through the app
app.wss = wss;

const MongoClient = mongo.MongoClient;
MongoClient.connect('mongodb://localhost:27017/votingapp')
.then((db) => {
  // Link the database through the app. It will be available in the req object
  app.db = db;
  socketHandler(app);
  console.log('App listening on port ' + process.env.PORT);
  app.listen(process.env.PORT);
})
.catch((err) => {
  console.log('There was an error connecting to the database.');
  console.log(err);
});

module.exports = app; // For testing

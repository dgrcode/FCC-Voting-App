const express = require('express');
const session = require('express-session');
const mongo = require('mongodb');
const passport = require('passport');
const path = require('path');
const routes = require('./app/routes');
const login = require('./app/routes/login.js');

const app = express();
app.use(session({
  secret: 'votingapp',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/public/js/',
  express.static(path.join(__dirname, 'public', 'js')));
app.use('/public/vendor/',
  express.static(path.join(__dirname, 'public', 'vendor')));
app.use('/public/css/',
  express.static(path.join(__dirname, 'public', 'styles', 'css')));
app.use('/public/fonts/',
  express.static(path.join(__dirname, 'public', 'fonts')));
app.use(routes);
app.use(login);
app.set('view engine', 'pug');

const MongoClient = mongo.MongoClient;
MongoClient.connect('mongodb://localhost:27017/votingapp')
.then((db) => {
  // Link the database through the app. It will be available in the req object
  app.db = db;
  console.log('App listening on port ' + process.env.PORT);
  app.listen(process.env.PORT);
})
.catch((err) => {
  console.log('There was an error connecting to the database.');
  console.log(err);
});

module.exports = app; // For testing

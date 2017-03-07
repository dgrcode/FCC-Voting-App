const express = require('express');
const mongo = require('mongodb');
const path = require('path');
const routes = require('./app/routes');

const app = express();
app.use('/public', express.static(path.normalize('./public')));
app.use(routes);
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

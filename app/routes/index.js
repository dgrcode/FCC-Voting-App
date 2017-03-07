const express = require('express');
const router = new express.Router();
const passport = require('passport');
const getPolls = require('../controllers/getPolls.server.js');
const getPollInfo = require('../controllers/getPollInfo.server.js');

router.get('/', (req, res) => {
  console.log('Entrando en el home');
  const db = req.app.db;
  getPolls(db)
  .then((pollsObj) => {
    // console.log(pollsObj);
    res.render('index', {polls: pollsObj});
  })
  .catch((err) => {
    console.log('Error getting the polls');
    console.log(err);
    res.render('500');
  });
});

router.get('/poll/:id', (req, res) => {
  console.log('Entrando en poll con id:' + req.params.id);
  const db = req.app.db;
  getPollInfo(db, req.params.id)
  .then((pollInfo) => {
    res.render('poll', {poll: pollInfo});
  })
  .catch((err) => {
    console.log('Error getting poll info');
    console.log(err);
  });
});

router.post('/login', (req, res) => {
  // TODO make login route
});

router.get('/:word', (req, res) => {
  res.end(req.params.word);
});

module.exports = router;

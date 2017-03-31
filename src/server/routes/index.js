const express = require('express');
const router = new express.Router();
const path = require('path');
const getPolls = require('../controllers/getPolls.server.js');
const getPollInfo = require('../controllers/getPollInfo.server.js');

router.get('/', (req, res) => {
  console.log('Entrando en el home');
  const db = req.app.db;
  getPolls(db)
  .then((pollsObj) => {
    // console.log(pollsObj);
    /*
    res.render('index', {
      user: req.user,
      hasUsername: !!req.user && !!req.user.username,
      polls: pollsObj,
    });
    */
    res.sendFile(path.join(__dirname, '/../../../dist', 'index.html'));
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
    res.render('poll', { poll: pollInfo });
  })
  .catch((err) => {
    console.log('Error getting poll info');
    console.log(err);
  });
});

router.get('/new', (req, res) => {
  console.log('New poll');
  console.log({
    user: req.user,
    hasUsername: !!req.user && !!req.user.username
  });
  res.render('newpoll', {
    user: req.user,
    hasUsername: !!req.user && !!req.user.username
  });
});

module.exports = router;

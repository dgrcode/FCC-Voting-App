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
    //TODO change by using req.headersSent
    try {
      res.cookie('polls', JSON.stringify(pollsObj));
    } catch (e) {
      console.log('Cookie not sent. Not available in time');
    }
  })
  .catch((err) => {
    console.log('Error getting the polls');
    console.log(err);
    res.render('500');
  });
  res.sendFile(path.join(__dirname, '/../../../dist', 'index.html'));
});

const clientRedirect = (req, res) => {
  res.cookie('redirect', req.path);
  res.redirect('/');
};

router.get('/poll/:id', clientRedirect);
router.get('/new', clientRedirect);

module.exports = router;

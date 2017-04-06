const express = require('express');
const router = new express.Router();
const path = require('path');

router.get('/', (req, res) => {
  console.log('Entrando en el home');
  res.sendFile(path.join(__dirname, '/../../../dist', 'index.html'));
});

const clientRedirect = (req, res) => {
  res.cookie('redirect', req.path);
  res.redirect('/');
};

router.get('/poll/:id', clientRedirect);
router.get('/new', clientRedirect);

module.exports = router;

const express = require('express');
const router = new express.Router();
const path = require('path');

router.get('*', (req, res) => {
  console.log('Entrando en el home');
  res.sendFile(path.join(__dirname, '/../../../dist', 'index.html'));
});

module.exports = router;

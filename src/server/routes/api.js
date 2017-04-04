const express = require('express');
const router = new express.Router();
const cache = require('../cache/cache');

router.post('/api/history', (req, res) => {
  cache.put('prevHistory', req.body.prevHistory);
  console.log('Recibe history: ' + req.body.prevHistory);
  res.end();
});

module.exports = router;

const express = require('express');
const router = new express.Router();
const cache = require('../cache/cache');

router.post('/api/redirect', (req, res) => {
  cache.put('redirect', req.body.redirect);
  res.end();
});

module.exports = router;

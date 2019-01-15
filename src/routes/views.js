// dependencies
const express = require('express');
const router = express.Router();

// public endpoints
router.get('/index', function(req, res, next) {
  res.sendFile('index.html', { root: 'src/views' });
});

router.get('/', function(req, res) {
  res.sendFile('landingPage.html', { root: 'src/views' });
});

module.exports = router;

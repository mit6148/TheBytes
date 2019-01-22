// dependencies
const express = require('express');

const router = express.Router();

// public endpoints
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'src/views' });
});

router.get('/l', function(req, res) {
  res.sendFile('landingPage.html', { root: 'src/views' });
});

router.get('/game', function(req, res) {
  res.sendFile('game.html', { root: 'src/views' });
});

router.get('/u/profile', function(req, res) {
  res.sendFile('profile.html', { root: 'src/views' });
});


router.get('/wait', function(req, res, next) {
  res.sendFile('wait.html', { root: 'src/views' });
});

module.exports = router;

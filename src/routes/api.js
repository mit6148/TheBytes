// dependencies
const express = require('express');
// models

const router = express.Router();

// api endpoints
router.get('/whoami', function(req, res) {
  res.send({
    _id: 'anonid',
    name: 'Anonymous',
    last_post: 'Anon was here',
  });
});

router.get('/user', function(req, res) {
  res.send({
    _id: 'anonid',
    name: 'Anonymous',
    last_post: 'Anon was here',
  });
});

const Twitter = require('twitter');

//Twitter API currently prints tweets for DTrump --> Check the terminal 
const client = new Twitter({
    consumer_key: 'iCAwDM1eX3NpprOjGbssUd0Eg',
    consumer_secret: '59xPw0xcozGmViW9Uns0BD13qX4dI3UvTGyUsGesm37wHrVYOm',
    bearer_token: 'AAAAAAAAAAAAAAAAAAAAAIYg9QAAAAAA10NZVma%2FJL0jQyuMllf%2FTaXOG%2BU%3DVG1AoTppEGqAMfgrXNE8QTkiAcc6Pdv4isWpIJWIobLov0kt4M'
});

const params = [];

router.get('/tweets', function(req, res) {
  client.get('statuses/user_timeline', { screen_name: 'realDonaldTrump', include_rts: false}, function(error, tweets, response) {
    if (!error) {
        res.send(tweets);
    }
  });
});

module.exports = router;

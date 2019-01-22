// dependencies
const express = require('express');
const connect = require('connect-ensure-login');

// models

const router = express.Router();

const User = require('../models/user');
// api endpoints
router.get('/whoami', function(req, res) {
  if(req.isAuthenticated()){
    res.send(req.user);
  }
  else{
    res.send({});
  }
});

router.get('/user', function(req, res) {
  User.findOne({_id: req.query._id},function(err,user){
    res.send(user);
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

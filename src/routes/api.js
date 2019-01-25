// dependencies
const express = require('express');
const connect = require('connect-ensure-login');

const db = require('../db');
const tweetModel = require('../models/tweet')
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
let tweetsToBeSaved = new Array(0);

router.get('/tweets', function(req, res) {
  client.get('statuses/user_timeline', { screen_name: 'realDonaldTrump', include_rts: false}, function(error, tweets, response) {
    if (!error) {
        res.send(tweets);


        for(let i = 0; i < tweets.length; i++){
          console.log(res.body.text);
          let tweetsToBeSaved = {
            twid: res.body.id,
            body: res.body.text,
            date: res.body.created_at,
            screenname: res.body.user.screen_name
          };
        }
        
        let tweetEntry = new tweetModel(tweetsToBeSaved);

        tweetEntry.save(function(err) {
          if (!err) {
            // If everything is cool, socket.io emits the tweet.
            console.log('tweet saved');
          }
        });
        // tweetsToBeSaved = new tweetModel({
        //   twitterUsername : tweets,
        //   tweetContent    : tweets
        // });
        // tweetsToBeSaved.save(function (err) {
        //    if (err) return handleError(err);
        //   //   // saved!
        //   console.log('tweet saved');
        // });
    }
  });
});




module.exports = router;

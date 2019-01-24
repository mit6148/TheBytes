const Twitter = require('twitter');
const db = require('./db');
const tweetModel = require('./models/tweet')

//Twitter API currently prints tweets for DTrump --> Check the terminal 
const client = new Twitter({
    consumer_key: 'iCAwDM1eX3NpprOjGbssUd0Eg',
    consumer_secret: '59xPw0xcozGmViW9Uns0BD13qX4dI3UvTGyUsGesm37wHrVYOm',
    bearer_token: 'AAAAAAAAAAAAAAAAAAAAAIYg9QAAAAAA10NZVma%2FJL0jQyuMllf%2FTaXOG%2BU%3DVG1AoTppEGqAMfgrXNE8QTkiAcc6Pdv4isWpIJWIobLov0kt4M'
});

const params = {screen_name: 'POTUS'};
const tweetsList = new Array(0);
const tweetsToBeSaved = new Array(0);

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    for(let i = 0; i < tweets.length; i++){
        res.status(200).render('index', { title: 'Express', tweets: tweets[i] });
        tweetsToBeSaved = new tweet({
          twitterUsername : 'screen_name',
          tweetContent    : tweets[i].user.screen_name

        });
    }
    
  }
});

//mongoTest
// let awesome_instance = new user({
//   name: 'awesome'
// });

// awesome_instance.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
//   console.log('user saved');
// });


module.exports = tweetsList;
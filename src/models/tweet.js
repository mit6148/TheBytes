// import node modules
const mongoose = require('mongoose');

// define a schema
const TweetModelSchema = new mongoose.Schema ({
  username        	: String,
  tweetContent     	: String,
});

// compile model from schema
module.exports = mongoose.model('TweetModel', TweetModelSchema);

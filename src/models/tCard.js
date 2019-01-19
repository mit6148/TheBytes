const mongoose = require('mongoose');

// define a schema
const TweetCardSchema = new mongoose.Schema ({
  user_name     : String,
  content     	: String,
});

// compile model from schema
module.exports = mongoose.model('TweetCard', UserModelSchema);
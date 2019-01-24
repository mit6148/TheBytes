// import node modules
const mongoose = require('mongoose');

// define a schema
const TweetModelSchema = new mongoose.Schema ({
     twid       : String
    , body       : String
    , date       : Date
    , screenname : String
});


// compile model from schema
module.exports = mongoose.model('tweetModel', TweetModelSchema);

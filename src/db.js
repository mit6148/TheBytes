const mongoose = require('mongoose');
console.log(process.env.ATLAS_SRV);
const mongoURL = process.env.ATLAS_SRV;
// set up mongoDB connection
// Example URI ---> mongodb+srv://weblab:6jYctMizX5Y5ie6W@catbook-fsjig.mongodb.net/catbookdb?retryWrites=true

const options = {
  useNewUrlParser: true
};
mongoose.connect(mongoURL, options);
mongoose.Promise = global.Promise;
const db = mongoose.connection;


// db error handling
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// db.createCollection("tweets", function(err, res) {
//   if (err) throw err;
//   console.log("Collection created!");
//   db.close();
// });
module.exports = db;

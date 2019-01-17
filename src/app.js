const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');

const socketio = require('socket.io');
const db = require('./db');

const passport = require('./passport');
const views = require('./routes/views');
const api = require('./routes/api');
const Twitter = require('twitter');
// const T = new Twitter(config);

// initialize express app
const app = express();
// set POST request body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Twitter API currently prints tweets for DTrump --> Check the terminal 
const client = new Twitter({
    consumer_key: 'iCAwDM1eX3NpprOjGbssUd0Eg',
    consumer_secret: '59xPw0xcozGmViW9Uns0BD13qX4dI3UvTGyUsGesm37wHrVYOm',
    bearer_token: 'AAAAAAAAAAAAAAAAAAAAAIYg9QAAAAAA10NZVma%2FJL0jQyuMllf%2FTaXOG%2BU%3DVG1AoTppEGqAMfgrXNE8QTkiAcc6Pdv4isWpIJWIobLov0kt4M'
});

const params = {screen_name: 'POTUS'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {

    for(let i = 0; i < tweets.length; i++){
      console.log(tweets[i].text);
    }
  }
});

// hook up passport
app.use(passport.initialize());
app.use(passport.session());

// authentication routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get(
  '/auth/google/callback',
  passport.authenticate(
    'google',
    { failureRedirect: '/login' }
  ),
  function(req, res) {
    res.redirect('/');
  }
);

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

// set up sessions
app.use(session({
  secret: 'session-secret',
  resave: 'false',
  saveUninitialized: 'true'
}));

// set routes
app.use('/', views);
app.use('/api', api );
app.use('/static', express.static('public'));

// 404 route
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// route error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    status: err.status,
    message: err.message,
  });
});

// port config
const port = 3000; // config variable
const server = http.Server(app);

//configure socket.io
const io = socketio(server);
app.set('socketio',io);


io.on('connection', function(socket){
  console.log('a user connected');
});

server.listen(port, function() {
  console.log('Server running on port: ' + port);
});

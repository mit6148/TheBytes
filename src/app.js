const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
var fs = require('fs');                 // File system
const socketio = require('socket.io');//set up socket for the server
const db = require('./db');
const mocha = require('mocha');

const passport = require('./passport');
const views = require('./routes/views');
const api = require('./routes/api');
const Twitter = require('twitter');

const connections = [];//open a connection


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
const tweetsCollection = db.collection('tweets');
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {

    for(let i = 0; i < tweets.length; i++){
      console.log(tweets[i].text);
      /*  tweetsCollection.insert({
        query: {'id': 'data.id'},
        update: { $set: tweets},
        upsert: true,
        new: true
    })*/
    }
  }
});

db.collection('realTweets.realTweetsCollection1').insertOne(
  {
    'item':"hello world"
  }
);

 function savingTweets(){
  let char = new tweetsModel({
    username: 'mario'
  });
  char.save().then(function(){//saves to the database
    assert(char.isNew === false);//means it's not new
    done();//waits for the save to finish
  });
 }


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

//number of clients connected to the socket server 
let numOfClients = 0;

//testing room socket

io.sockets.on('connection', function(socket){

  socket.on('create', function(room) {
    socket.join(room);
    console.log(room);
  });

// now, it's easy to send a message to just the clients in a given room
room = "abc123";
io.sockets.in(room).emit('message', 'what is going on, party people?');

  numOfClients++;
  //Increase roomno 2 clients are present in a room.
  //if(io.nsps['/index'].adapter.rooms["room-"+roomno] && io.nsps['/index'].adapter.rooms["room-"+roomno].length > 1) roomno++;
  //socket.join("room-"+roomno);

  

  //Send this event to everyone in the room.
  //io.sockets.in("room-"+roomno).emit('connectToRoom', "You are in room no. "+roomno);
  //to broadcast an event 

  /*io.sockets.emit('broadcast',{ description: numOfClients + ' clients connected!'}) 
  console.log('a user connected');
  socket.on('clientEvent',function(data){
    console.log(data);
  })
  //send a message after a timeout of 4seconds
  setTimeout(function(){
    socket.emit('testerEvent', { description: 'A custom event named testerEvent!'});
   },4000);*/


  //execute the following when a user disconnects
  socket.on('disconnect', function(){
    numOfClients--;
    io.sockets.emit('broadcast',{ description: numOfClients + ' clients connected!'});
    console.log('A user disconnected')
  });
});

server.listen(port, function() {
  console.log('Server running on port: ' + port);
});

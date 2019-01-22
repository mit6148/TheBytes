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


db.collection('realTweets.realTweetsCollection1').insertOne(
  {
    'item':"hello world"
  }
);

app.use(session({
  secret: 'session-secret',
  resave: 'false',
  saveUninitialized: 'true'
}));

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
app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.get(
  '/auth/google/callback',
  passport.authenticate(
    'google',
    { failureRedirect: '/l' }
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

const destination =  '/game'

//number of clients connected to the socket server 
let numOfClients = 0;



io.on('connection', function(socket) {
  numOfClients++;
  console.log('A user connected');
  io.sockets.emit('broadcast',{ description: numOfClients + ' clients connected!'});
  if(numOfClients == 3){
    io.sockets.emit('redirect', destination);
    console.log('redirected');
  }
  //Whenever someone disconnects this piece of code executed
  socket.on('disconnect', function () {
     console.log('A user disconnected');
     numOfClients--;
     io.sockets.emit('broadcast',{ description: numOfClients + ' clients connected!'});
  });
});


//testing room socket

// io.sockets.on('connection', function(socket){

//   socket.on('room', function(room) {
//     socket.join(room);
//     io.sockets.in(room).emit('message', 'what is going on, party people?');
//   });

//     // socket.on('create', function(room) {
//     // const gameId = (Math.random()+1).toString(36).slice(2,18);
//     // console.log('Game room:' + gameId);
//     // socket.join(room);
//     // socket.rooms = [room];
//     // console.log(socket.rooms.id);


//     // io.emit('gameCreated', {
//     //   id: gameId
//     // });
//   });

// now, it's easy to send a message to just the clients in a given room

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
  


server.listen(port, function() {
  console.log('Server running on port: ' + port);
});

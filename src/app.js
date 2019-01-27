const dotenv = require('dotenv').config();
const playerNum = 3;
const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
var fs = require('fs');                 // File system
const socketio = require('socket.io');//set up socket for the server
const db = require('./db');

const passport = require('./passport');
const views = require('./routes/views');
const api = require('./routes/api');
const user = require('./models/user')
// initialize express app
const app = express();

// set POST request body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

 // set up sessions
app.use(session({
  secret: 'session-secret',
  resave: 'false',
  saveUninitialized: 'true'
}));

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
    res.redirect('/index');
  }
);

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});



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
const port = (process.env.PORT || 3000); // config variable
const server = http.Server(app);

//configure socket.io
const io = socketio(server);
app.set('socketio',io);

const destination =  '/game'


//number of clients connected to the socket server 
let numOfClients = 0;
let numOfPlayersAnswered = 0;



io.on('connection', function(socket) {
  socket.on('connectToGame',function(){
      numOfClients++;
  })
  console.log('A user connected');
  io.sockets.emit('broadcast',{ description: numOfClients + ' clients connected!'});
  if(numOfClients == playerNum){
    io.sockets.emit('redirect', destination);
    console.log('redirected');
  }

  socket.on('playerAnswer', function(data){
    console.log('playersAnswered : num of player answered=' + numOfPlayersAnswered);
    numOfPlayersAnswered++;
    if(numOfPlayersAnswered >= playerNum ){
      console.log('Everyone Answered');
      console.log('game is over');
      io.sockets.emit('gameOver');
      socket.send('Game is over!')
      numOfPlayersAnswered=0;
    }else{
    socket.send('Waiting for other players to answer!')
    }
});
  //Whenever someone disconnects this piece of code executed
  socket.on('disconnect', function () {
     console.log('A user disconnected');
     io.sockets.emit('broadcast',{ description: numOfClients + ' clients connected!'});
  });



});





server.listen(process.env.PORT || 3000);
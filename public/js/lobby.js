//initialize a socket 
const socket = io();
var params = jQuery.deparam(window.location.search);

//When player connects to server
socket.on('connect', function() {
    //parse the data from the url with deparam method 
    let params = jQuery.deparam(window.location.search); 
    
    //Tell server that it is player connection
    socket.emit('player-join', params);
});

//Boot player back to join screen if game pin has no match
socket.on('noGameFound', function(){
    window.location.href = '../';
});

//If the host disconnects, then the player is booted to main screen
socket.on('hostDisconnect', function(){
    window.location.href = '../';
});

//When the host clicks start game, the player screen changes
socket.on('gameStartedPlayer', function(){
    window.location.href="/player/game/" + "?id=" + socket.id;
});



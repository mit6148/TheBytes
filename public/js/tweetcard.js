// import { set } from "mongoose";

let playerAnswered = false;
const socket = io();

function select_username(names){
    return names[Math.floor(Math.random()*names.length)];
}


function removeElement(screenName, nameList){
    var index = nameList.indexOf(screenName);
    if (index > -1) {
        nameList.splice(index, 1);
    }
    
}



function createContentDOM(name){
    const contentDOM = document.createElement('div');
    get('/api/tweets/'+name, {}, function(tweets){
        for(let i = 0; i < 1; i++){
            contentDOM.id = 'content';
            contentDOM.innerText = tweets[i].text;
        }
          
            
    });
    return contentDOM;

}
function game(){
    const names = ['AOC', 'realDonaldTrump', 'BarackObama', 'SpeakerPelosi', 'SenSchumer', 'SenWarren',
    'SenSanders', 'KamalaHarris', 'HillaryClinton', 'SenGillibrand', 'CoryBooker', 'ArianaGrande', 'souljaboy', 'smoss', 'shaunking', 'kanyewest' , 'KimKardashian'];
    

        const screen_name = select_username(names);

       
        
        removeElement(screen_name, names);
    
        const idNames = ['1','2','3'];
        const falseTweetId = idNames[Math.floor(Math.random()*idNames.length)]; 
        removeElement(falseTweetId, idNames);
    
        const currentFalseUName = select_username(names);

        createCards(screen_name,falseTweetId,currentFalseUName);
    
    return falseTweetId;
}


function createCards(screen_name, falseId, falseName){
    get('/api/tweets/'+screen_name, {}, function(tweets){
        const MAX = ['1','2','3'];

        for(let i = 0; i < MAX.length; i++){
            const tweetButtonDOM = document.getElementById(MAX[i]);
            tweetButtonDOM.onClick = answerSubmitted();
            
            const imgContainDOM = document.createElement('div');
            imgContainDOM.className = 'col-sm-3';
            imgContainDOM.id = 'img-contain ';
            tweetButtonDOM.appendChild(imgContainDOM);

            const profileImageDOM = document.createElement('img');
            profileImageDOM.className = 'img-circle';
            profileImageDOM.src = tweets[i].user.profile_image_url;
            imgContainDOM.appendChild(profileImageDOM);

            const tweetDataDOM = document.createElement('div');
            tweetDataDOM.className = "col-sm-6";
            tweetDataDOM.id = 'tweet-data';
            tweetButtonDOM.appendChild(tweetDataDOM);
            
            const nameDOM = document.createElement('span');
            nameDOM.id = 'name';
            nameDOM.innerHTML = tweets[i].user.name;
            tweetDataDOM.appendChild(nameDOM);

            const userNameDOM = document.createElement('span');
            userNameDOM.id = 'user_name';
            userNameDOM.innerHTML = '@'+tweets[i].user.screen_name;
            tweetDataDOM.appendChild(userNameDOM);

            const contentDOM = document.createElement('div');
            contentDOM.id = 'content'+MAX[i];
            contentDOM.innerText = tweets[i].text;
            tweetDataDOM.appendChild(contentDOM);

        }
    });
}
let numOfPlayersAnswered = 0;
function answerSubmitted(){
        playerAnswered = true;
        //socket.emit('playerAnswer');
        socket.emit('playerAnswer', event.target.id);//Sends player answer to server
        socket.on('message', function(data){document.write(data)});
}
socket.on('redirect', function() {
    game();
});
socket.on('nextRound',function(){
    game();
    console.log('next question')
});

socket.on('gameOver',function(){
    window.location.replace('/end');
//    socket.emit('Game ended');
    console.log('game ended')
});

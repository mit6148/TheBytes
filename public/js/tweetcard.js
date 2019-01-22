let playerAnswered = false;
const socket = io();


function main() {


    // socket.on('gameCreated',function(data){
    //     console.log('Game created!'+data.id);
    // });
    const game = document.getElementById('game');

    const gamePinDOM = document.createElement('label');
    get('/api/tweets', {}, function(tweets){
        const MAX = 3;
        for (let i = 0; i < MAX; i++){
            const tweetCardDOM = document.createElement('button');
            tweetCardDOM.className = 'panel panel-default row';
            tweetCardDOM.id = i;
            const imgContainDOM = document.createElement('div');
            imgContainDOM.className = 'col-sm-3';
            imgContainDOM.id = 'img-contain ';
            tweetCardDOM.appendChild(imgContainDOM);


            const profileImageDOM = document.createElement('img');
            profileImageDOM.className = 'img-circle';
            profileImageDOM.src = tweets[i].user.profile_image_url;
            imgContainDOM.appendChild(profileImageDOM);

            const tweetDataDOM = document.createElement('div');
            tweetDataDOM.className = "col-sm-6";
            tweetDataDOM.id = 'tweet-data';
            tweetCardDOM.appendChild(tweetDataDOM);
            
            const nameDOM = document.createElement('span');
            nameDOM.id = 'name';
            nameDOM.innerHTML = tweets[i].user.name;
            tweetDataDOM.appendChild(nameDOM);

            const userNameDOM = document.createElement('span');
            userNameDOM.id = 'user_name';
            userNameDOM.innerHTML = '@'+tweets[i].user.screen_name;
            tweetDataDOM.appendChild(userNameDOM);

            const contentDOM = document.createElement('div');
            contentDOM.id = 'content';
            contentDOM.innerText = tweets[i].text;
            tweetDataDOM.appendChild(contentDOM);

            tweetCardDOM.addEventListener('click',answerSubmitted,false);

            game.prepend(tweetCardDOM);
        }

            //const socket = io();
            //socket.on('user', function(story){
           // const storiesDiv = document.getElementById('users');
           // storiesDiv.prepend(storyDOMObject(story.user));
         // });
    

    });
}

function answerSubmitted(){
        console.log('clicked')
        playerAnswered = true;
        socket.emit('playerAnswer', event.target.id);//Sends player answer to server
        socket.on('message', function(data){document.write(data)});
        // //Hiding buttons from user
        // document.getElementById('answer1').style.visibility = "hidden";
        // document.getElementById('answer2').style.visibility = "hidden";
        // document.getElementById('answer3').style.visibility = "hidden";
        // document.getElementById('answer4').style.visibility = "hidden";
        // document.getElementById('message').style.display = "block";
        // document.getElementById('message').innerHTML = "Answer Submitted! Waiting on other players...";

}

main();
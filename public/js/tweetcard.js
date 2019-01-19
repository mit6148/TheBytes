function main() {
    const game = document.getElementById('game');
    get('/api/tweets', {}, function(tweets){
        const MAX = 3;
        for(let i = 0; i < MAX; i++){
            const tweetCardDOM = document.createElement('div');
            tweetCardDOM.className = 'panel panel-default row';

            const imgContainDOM = document.createElement('div');
            imgContainDOM.className = 'col-sm-3';
            imgContainDOM.id = 'img-contain ';
            tweetCardDOM.appendChild(imgContainDOM);


            const profileImageDOM = document.createElement('img');
            profileImageDOM.className = 'img-circle';
            profileImageDOM.src = tweets[i].user.profile_image_url;
            imgContainDOM.appendChild(profileImageDOM);

            const tweetDataDOM = document.createElement('div');
            tweetDataDOM.className = "col-sm-6"
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

            
            game.prepend(tweetCardDOM);
        }
    });
}

main();
function main() {
  get('/api/whoami', {}, function(user) {
    console.log(user);
    renderNavbar(user);
//use socket!
    // const socket = io();
    // socket.on('story', function(story){
    //   const storiesDiv = document.getElementById('stories');
    //   storiesDiv.prepend(storyDOMObject(story.user));
    // });

  });
}

main();

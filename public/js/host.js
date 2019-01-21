
class Game{

  constructor(){
    this.pin = this.generatePin();
  }

  generatePin(){
    gameId = (Math.random()+1).toString(36).slice(2, 18);
    console.log(gameId);
    return gameId;
  }

}

const gameTest = new Game();

class Game {

  constructor() {
    this.turnLeft = 10;
    this.players= [];
    // this.currentPlayer = [];
    this.playerTurnIndex = 0;
  }

  addPlayers() {
    this.players.push(
      new Fighter("Grace"),
      new Paladin("Ulder"),
      new Monk("Moana"),
      new Berzerker("Draven"),
      new Assassin("Carl")
    )
  }

  watchStats() {
    // console.log( this.players)
    this.players.map((player) => {
      if (player.status == "playing") {
        console.log(
          ` %c${player.name.toUpperCase()} (${player.constructor.name}): points de vie ${player.hp} , puissance ${player.dmg} , mana ${player.mana}`
          ,"font-size:16px;color:gold");
    }
  })}



  endGame() {
    console.log("This is the end")
    this.players.map((player) => {
      if (player.status == "playing") {
        console.log(` %c Les survivants sont : ${player.name.toUpperCase()} (${player.constructor.name}): points de vie ${player.hp} `
          , "font-size:16px;color:lime");
      }
  })}

  newTurn() {
    this.turnLeft -= 1;
  }

  startTurn() {
    console.log(`C'est le tour : ${10 - this.turnLeft}`)

  }

}




const game = new Game();
console.clear()
console.log(`game start`);
game.addPlayers()
game.watchStats()

while ((game.players.filter(player=>player.status=="playing").length > 1) && game.turnLeft > 0 ) {
  new Turn(game.players, game);
  game.newTurn()
  game.startTurn()
  game.watchStats();
}
game.endGame();


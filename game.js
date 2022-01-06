class Game {

  constructor() {
    this.turnLeft = 10;
    this.players= [];
    this.currentPlayer = [];
    this.playerTurnIndex = 0;
  }

  addPlayers() {
    this.players.push(
      new Character("Carl"),
      new Character("Draven")
    )
  }

  watchStats() {
    // console.log( this.players)
    this.players.map((player) => {
      if (player.state == "alive") {
        console.log(
          ` %c${player.name.toUpperCase()} : points de vie ${player.hp} , puissance de feu ${player.dmg} , cosmoénergie ${player.mana}`
          ,"font-size:20px;color:gold");
    }
  })}

}
const game = new Game();
console.clear()
console.log(`game start`);
game.addPlayers()
game.watchStats()
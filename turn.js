class Turn {
  // const input = prompt("Qui attaques-tu ?");
  constructor(players, game) {
    // console.clear()
    this.players = players.filter(player => player.status == "playing");
    this.game = game;
    this.shufflePlayers();
    this.attacks(this.players)

  }

  shufflePlayers() {
    this.players.sort(() => Math.random() - 0.5);
  console.log(this.players)}
  

  pickVictim(ennemies) {
    return Math.floor(Math.random() * Math.floor(ennemies.length));
  }

  attacks(players){ players.forEach(player => {let ennemies = players.filter(players => players !== player)
    let shuffle = Math.floor(Math.random() * Math.floor(ennemies.length));
    console.log(`${player.name} attaque ${ennemies[shuffle].name} `);
    player.dealDamage(ennemies[shuffle])
  }
  )
 }

  }






      

   

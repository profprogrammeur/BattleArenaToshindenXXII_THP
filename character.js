class Character {
  constructor(name, hp = 10 , mana = 100, dmg = 2, status="playing") {  // winner, loser
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.status = status;
    this.mana = mana;
  }

  takeDamage(dmg) {
    this.hp -= dmg;
    if (this.hp > 0){
     
      console.log(`${this.name} perd ${dmg} points de vie!`);
    } else {
      this.status = "loser"
      console.log(`${this.name} mange les pissenlits par la racine !`);
    }

  }

  dealDamage(victim) {
    if (this.status == "playing"){
      victim.takeDamage(this.dmg)
    }
    
  }

}
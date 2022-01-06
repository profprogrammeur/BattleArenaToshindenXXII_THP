class Character {
  constructor(name, hp = 10 , dmg = 2 ,mana = 100, state="alive") {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.state = state;
    this.mana = mana;
    this.state = state
  }

  attack() {
    this.state = "defeated";
    console.log("The boss is dead! Well played");
  }

}
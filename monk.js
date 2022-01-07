class Monk extends Character {
  constructor(name, hp = 8, mana = 200, dmg = 2) {
    super(name, hp, mana, dmg);
  }
  // attack "heal" hp+=8 mana-=25 
}
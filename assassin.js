class Assassin extends Character {
  constructor(name, hp = 36, mana = 20, dmg = 6) {
    super(name, hp, mana, dmg);
  }
  // shadow hit, dmg = 7,  mana-=20, hp=const next turn
}
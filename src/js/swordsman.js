import Character from './character';

export default class swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defense = 10;
  }
}
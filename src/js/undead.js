import Character from './character';

export default class undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defense = 25;
  }
}
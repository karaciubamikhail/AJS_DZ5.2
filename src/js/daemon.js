import Character from './character';

export default class daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defense = 40;
  }
}
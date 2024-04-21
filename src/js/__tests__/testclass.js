import Bowman from '../bowerman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
import Daemon from '../daemon';

test('Bowman', () => {
    const char = new Bowman('test', 'Bowerman');
    expect(char.attack).toBe(25);
  });
  
  test.each([
    ['Bowman', new Bowman('test2', 'Bowerman'), 25],
    ['Swordsman', new Swordsman('test', 'Swordsman'), 40],
    ['Magician', new Magician('test', 'Magician'), 10],
    ['Undead', new Undead('test', 'Undead'), 25],
    ['Zombie', new Zombie('test', 'Zombie'), 40],
    ['Daemon', new Daemon('test', 'Daemon'), 10],
  
  ])(('test attack'), (name, classType, expected) => {
    const char2 = classType;
    expect(char2.attack).toEqual(expected);
  });
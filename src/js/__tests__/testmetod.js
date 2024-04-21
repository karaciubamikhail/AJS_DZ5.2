import Character from '../character';

test('LevelUp', () => {
    const char = new Character('test', 'Bowerman');
    char.health = 1;
    const oldLevel = char.level;
    char.levelUp();
    expect(oldLevel + 1).toBe(char.level);
  });
  test('damage', () => {
    const char = new Character('test', 'Bowerman');
    char.damage(50);
    expect(char.health).toBe(50);
  });
  test('test damage with def ', () => {
    const char = new Character('test', 'Daemon');
    char.defense = 50;
    char.damage(50);
    expect(char.health).toBe(75);
  });
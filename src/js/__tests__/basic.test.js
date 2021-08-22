import Character from '../basic';

test.each([
  ['Ann', 'Bowerman', {
    name: 'Ann',
    type: 'Bowerman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  }],
  ['Spring', 'Swordsman', {
    name: 'Spring',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  }],
  ['Autumn', 'Magician', {
    name: 'Autumn',
    type: 'Magician',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  }],
  ['Winter', 'Daemon', {
    name: 'Winter',
    type: 'Daemon',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  }],
  ['Autumn', 'Undead', {
    name: 'Autumn',
    type: 'Undead',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  }],
  ['Kitty', 'Zombie', {
    name: 'Kitty',
    type: 'Zombie',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  }],
])(
  ('should create new Character'),
  (name, type, expected) => {
    const result = new Character(name, type);
    expect(result).toEqual(expected);
  },
);

test('should get level up', () => {
  const input = new Character('Kitty', 'Zombie');
  const reseived = input.levelUp();
  const expected = {
    name: 'Kitty',
    type: 'Zombie',
    attack: 48,
    defence: 12,
    health: 100,
    level: 2,
  };

  expect(reseived).toEqual(expected);
});

test('should get damage', () => {
  const input = new Character('Kitty', 'Zombie');
  const reseived = input.damage(5);
  const expected = {
    name: 'Kitty',
    type: 'Zombie',
    attack: 40,
    defence: 10,
    health: 95.5,
    level: 2,
  };

  expect(reseived).toEqual(expected);
});

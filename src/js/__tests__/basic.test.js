import Character from '../basic';

test('should create new Character', () => {
  const received = new Character('Eva');
  const expected = {
    name: 'Eva',
    health: 100,
    level: 1,
    defence: 10,
    attack: 10,
  };
  expect(received).toEqual(expected);
});

test('should get level up', () => {
  const input = new Character('Eva');
  const received = input.levelUp();
  const expected = {
    name: 'Eva',
    attack: 12,
    defence: 12,
    health: 100,
    level: 2,
  };

  expect(received).toEqual(expected);
});

test('should get damage', () => {
  const input = new Character('Eva');
  const received = input.damage(5);
  const expected = {
    name: 'Eva',
    attack: 10,
    defence: 10,
    health: 95.5,
    level: 1,
  };

  expect(received).toEqual(expected);
});

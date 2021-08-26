import Zombie from '../zombie';

test('should create new Zombie', () => {
  const received = new Zombie('Kitty', 'Zombie');
  const expected = {
    name: 'Kitty',
    type: 'Zombie',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };
  expect(received).toEqual(expected);
});

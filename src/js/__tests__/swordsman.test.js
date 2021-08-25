import Swordsman from '../swordsman';

test('should create new Swordsman', () => {
  const received = new Swordsman('Spring');
  const expected = {
    name: 'Spring',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };
  expect(received).toEqual(expected);
});

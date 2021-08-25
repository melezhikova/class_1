import Undead from '../undead';

test('should create new Undead', () => {
  const received = new Undead('Autumn');
  const expected = {
    name: 'Autumn',
    type: 'Undead',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };
  expect(received).toEqual(expected);
});

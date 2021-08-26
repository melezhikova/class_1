import Magician from '../magician';

test('should create new Magician', () => {
  const received = new Magician('Autumn', 'Magician');
  const expected = {
    name: 'Autumn',
    type: 'Magician',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };
  expect(received).toEqual(expected);
});

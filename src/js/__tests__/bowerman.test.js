import Bowerman from '../bowerman';

test('should create new Bowerman', () => {
  const received = new Bowerman('Ann');
  const expected = {
    name: 'Ann',
    type: 'Bowerman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };
  expect(received).toEqual(expected);
});

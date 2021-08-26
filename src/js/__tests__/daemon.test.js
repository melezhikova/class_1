import Daemon from '../daemon';

test('should create new Daemon', () => {
  const received = new Daemon('Winter', 'Daemon');
  const expected = {
    name: 'Winter',
    type: 'Daemon',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };
  expect(received).toEqual(expected);
});

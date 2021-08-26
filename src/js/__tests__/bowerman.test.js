import Bowerman from '../bowerman';

test('should create new Bowerman', () => {
  const received = new Bowerman('Ann', 'Bowerman');
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

test('should get level up', () => {
  const bowerman = new Bowerman('Eva', 'Bowerman');
  bowerman.health = 80;
  bowerman.levelUp();

  const expected = {
    name: 'Eva',
    type: 'Bowerman',
    attack: 30,
    defence: 30,
    health: 100,
    level: 2,
  };

  expect(bowerman).toEqual(expected);
});

test('should get damage', () => {
  const bowerman = new Bowerman('Eva', 'Bowerman');
  bowerman.damage(5);

  const expected = {
    name: 'Eva',
    type: 'Bowerman',
    attack: 25,
    defence: 25,
    health: 96.25,
    level: 1,
  };

  expect(bowerman).toEqual(expected);
});

test('should get error when try to levelUp', () => {
  function levelUpBowerman() {
    const bowerman = new Bowerman('Eva', 'Bowerman');
    bowerman.health = 0;
    bowerman.levelUp();
  }

  expect(levelUpBowerman).toThrowError('Нельзя повысить левел умершего');
});

test('damage doesnot work when healt = 0', () => {
  const bowerman = new Bowerman('Eva', 'Bowerman');
  bowerman.health = 5;
  bowerman.damage(30);

  const received = bowerman.health;
  const expected = 0;

  expect(received).toBe(expected);
});

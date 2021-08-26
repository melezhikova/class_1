import Character from '../basic';

test('should create new Character', () => {
  const received = new Character('Eva', 'Zombie');

  const expected = {
    name: 'Eva',
    type: 'Zombie',
    health: 100,
    level: 1,
  };
  expect(received).toEqual(expected);
});

test('should get error when create new Character_name', () => {
  function create () {
    const eva = new Character('Evaaaaaaaaa', 'Zombie');
  }

  expect(create).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('should get error when create new Character_type', () => {
  function create () {
    const eva = new Character('Eva', 'Zombieee');
  }

  expect(create).toThrowError('Такого персонажа не существует');
});


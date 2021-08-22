const types = ['Bowerman', 'Undead', 'Swordsman', 'Zombie', 'Magician', 'Daemon'];

export default class Character {
  constructor(name, type) {
    if (name.length > 1 && name.length < 11) {
      this.name = name;
    } else {
      throw new Error('Длина имени должна быть от 2 до 10 символов');
    }
    if (!types.includes(type)) {
      throw new Error('Такого персонажа не существует');
    } else {
      switch (type) {
        case 'Bowerman':
        case 'Undead':
          this.attack = 25;
          this.defence = 25;
          break;
        case 'Swordsman':
        case 'Zombie':
          this.attack = 40;
          this.defence = 10;
          break;
        case 'Magician':
        case 'Daemon':
          this.attack = 10;
          this.defence = 40;
          break;
        default:
          this.type = type;
      }
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

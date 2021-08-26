const types = ['Bowerman', 'Daemon', 'Magician', 'Swordsman', 'Undead', 'Zombie'];

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
      this.type = type;
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

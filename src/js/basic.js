export default class Character {
  constructor(name, type) {
    if (name.length > 1 && name.length < 11) {
      this.name = name;
    } else {
      throw new Error('Длина имени должна быть от 2 до 10 символов');
    }

    if (type === 'Bowerman') {
      this.type = type;
      this.attack = 25;
      this.defence = 25;
    } else if (type === 'Swordsman') {
      this.type = type;
      this.attack = 40;
      this.defence = 10;
    } else if (type === 'Magician') {
      this.type = type;
      this.attack = 10;
      this.defence = 40;
    } else if (type === 'Daemon') {
      this.type = type;
      this.attack = 10;
      this.defence = 40;
    } else if (type === 'Undead') {
      this.type = type;
      this.attack = 25;
      this.defence = 25;
    } else if (type === 'Zombie') {
      this.type = type;
      this.attack = 40;
      this.defence = 10;
    } else {
      throw new Error('Такого персонажа не существует');
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
      const errorLevelUp = new Error('Нельзя повысить левел умершего');
      alert(errorLevelUp.message);
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

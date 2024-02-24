export default class Character {
  constructor(name, type) {
    if (typeof name === 'string' && /[a-zа-яё]/i.test(name) && (name.length >= 2 && name.length <= 10)) {
      this.name = name;
    } else {
      throw new Error('Name has to be from 2 to 10 characters lenght and contains at least one letter');
    }
    const characters = ['Magician', 'Daemon'];

    if (characters.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Unsupported class of adventure!');
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.health = 100;
      this.defaultAttack *= 1.2;
      this.defence *= 1.2;
    } else {
      throw new Error('Death cannot be cheated');
    }
  }

  damage(points) {
    const dmg = points * (1 - this.defence / 100);
    if (this.health >= dmg) { this.health -= dmg; } else { this.health = 0; }
  }
}

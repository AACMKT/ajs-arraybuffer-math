import Character from './Character';

export default class Magician extends Character {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.defaultAttack = 100;
    this.defence = 40;
    this.hasStoned = false;
  }

  /**
   * @param {boolean} bool
   */
  set stoned(bool) {
    if (!(typeof bool === 'boolean')) {
      if (['no', 'not', 'false', 'not stoned', '0'].includes(String(bool).toLowerCase())) {
        this.hasStoned = false;
      } else {
        this.hasStoned = Boolean(bool);
      }
    } else {
      this.hasStoned = bool;
    }
  }

  get stoned() {
    return this.hasStoned;
  }

  /**
   * @param {number} cell
   */
  set attack(cell) {
    const x = Number(cell);
    if (x > 10) {
      this.defaultAttack = 0;
    } else {
      this.defaultAttack = Number((this.defaultAttack * (1.1 - (x / 10))).toFixed(1));
    }
    if (this.hasStoned) {
      this.defaultAttack = Number(this.defaultAttack - (Math.log2(x) * 5).toFixed(1));
    }
  }

  get attack() {
    return this.defaultAttack;
  }
}

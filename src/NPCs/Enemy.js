export default class Enemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame, hp, damage, level, exp, gold) {
    super(scene, x, y, texture, frame, hp, damage, level, exp, gold);
    Phaser.GameObjects.Sprite.call(this, scene, x, y, texture, frame);
    this.setInteractive();
    this.hp = hp;
    this.damage = damage;
    this.level = level;
    this.exp = exp;
    this.gold = gold;
  }
  attack(target) {
    target.takeDamage(this.damage);
  }
  takeDamage(damage) {
    this.hp -= damage;
  }
}

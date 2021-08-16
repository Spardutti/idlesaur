export default class Boss extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame, hp, damage, level) {
    super(scene, x, y, texture, frame, hp, damage, level);
    Phaser.GameObjects.Sprite.call(this, x, y, texture, frame);
    this.setInteractive();
    this.hp = hp;
    this.damage = damage;
    this.level = level;
  }
  attack(target) {
    target.takeDamage(this.damage);
    target.hp -= this.damage;
  }
  takeDamage(damage) {
    this.hp -= damage;
  }
}

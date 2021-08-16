// ACTUALizAR HEROES

export default class Unit extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame, hp, damage, level, experience) {
    super(scene, x, y, texture, frame, hp, damage, level, experience);
    Phaser.GameObjects.Sprite.call(this, scene, x, y, texture, frame);
    this.setInteractive();
    this.hp = hp;
    this.damage = damage;
  }
  attack(target) {
    target.takeDamage(this.damage);
    target.hp -= this.damage;
  }
  takeDamage(damage) {
    this.hp -= damage;
  }
}

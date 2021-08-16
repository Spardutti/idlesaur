export default class Unit extends Phaser.GameObjects.Sprite {
  constructor(
    scene,
    x,
    y,
    texture,
    frame,
    hp,
    damage,
    level,
    experience,
    atkSpeed
  ) {
    super(scene, x, y, texture, frame, hp, damage, level, experience, atkSpeed);
    Phaser.GameObjects.Sprite.call(this, scene, x, y, texture, frame);
    this.setInteractive();
    this.hp = hp;
    this.damage = damage;
    this.level = level;
    this.experience = experience;
    this.atkSpeed = atkSpeed;
  }
  attack(target) {
    target.takeDamage(this.damage);
  }
  takeDamage(damage) {
    this.hp -= damage;
  }
}

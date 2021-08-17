export default class MainPlayer extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame, lvl, experience, gold) {
    super(scene, x, y, texture, frame, lvl, experience, gold);
    Phaser.GameObjects.Sprite.call(this, scene, x, y, texture, frame);
    this.setInteractive();
    this.experience = experience;
    this.gold = gold;
    this.lvl = lvl;
  }
}

export default class Experience extends Phaser.GameObjects,Sprite {
  constructor(scene, x, y, texture, frame, quantity) {
    super(scene, x, y, texture, frame, quantity);
    Phaser.GameObjects.Sprite.call(this, scene, x, y, texture, frame);
    this.setInteractive();
    this.quantity = quantity;
  }
}

export default class Creep extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "creep"); // scene, coordinadas, nombre de la imagen
    config.scene.add.existing(this);
    this.setInteractive();
    this.on("pointerdown", function () {
      this.attack();
    });
  }

  attack() {
    console.log("attack");
  }
}

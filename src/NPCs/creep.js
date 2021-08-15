export default class Minotaur extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "minotaur"); // scene, coordinadas, nombre de la imagen
    config.scene.add.existing(this);
    this.setInteractive();
    this.minotaur = this.add.sprite(500, 400, "minotaur", 0);
    this.anims.create({
      key: "minodead",
      frameRate: 5,
      frames: this.anims.generateFrameNumbers("minotaur", {
        start: 40,
        end: 49,
      }),
    });
  }

  attack() {
    console.log("minodead");
  }
}
let robertocarlos;

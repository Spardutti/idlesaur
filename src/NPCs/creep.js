import Player from "./player.js";

export default class Minotaur extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "minotaur"); // scene, coordinadas, nombre de la imagen
    config.scene.add.existing(this);
    this.setInteractive();

    //// ANIMATIONS
    this.anims.create({
      key: "minodead",
      frameRate: 5,
      frames: this.anims.generateFrameNumbers("minotaur", {
        start: 40,
        end: 49,
      }),
    });

    //// EVENTS
    this.on("pointerup", function () {
      this.attack();
      Player.prototype.attack();
    });

    //// STATS
    this.hp = 10;
    this.mp = 10;
  }

  ////METHODS
  attack(damage) {
    this.hp = this.hp - damage;
    console.log(this.hp);
    if (this.hp <= 0) this.play("minodead");
  }
}

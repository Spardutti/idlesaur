import Player from "./NPCs/player.js";
import Minotaur from "./NPCs/creep.js"
export default class Play extends Phaser.Scene {
  constructor() {
    super({ key: "play" });
  }

  preload() {
    this.load.image("player", "assets/images/player.png");
    this.load.image("skely", "assets/images/skely.png");
    this.load.spritesheet("rogue", "assets/images/rogue.png", {
      frameWidth: 32, // image width divided by the number of elements 320px/30 = 32
      frameHeight: 32, // image height divided by the number of elements 320px/30 = 32
    });
    this.load.spritesheet("minotaur", "assets/images/minotaur.png", {
      frameWidth: 48,
      frameHeight: 48,
    });
  }

  create() {
    ////////// PLAYER
    let player = new Player({ scene: this, x: 400, y: 300 });

    ////////// MINOTAUR
    let minotaur = new Minotaur({ scene: this, x: 500, y: 200});

    /////////// SKELY
    this.skely = this.add
      .sprite(500, 315, "skely")
      .setOrigin(0.5)
      .setInteractive();
    this.skely.flipX = true;

    ////////////// ROGUE
    this.rogue = this.add.sprite(100, 100, "rogue", 19); // 19 position of the spritesheet "array"
    this.anims.create({
      key: "walk",
      repeat: -1, // -1 repeats for ever. //2 repeats twice, etc
      frameRate: 5,
      frames: this.anims.generateFrameNumbers("rogue", { start: 20, end: 29 }), // loop from image 20, to image 29. repeat
    });
    this.rogue.play("walk");
    this.anims.create({
      key: "dead",
      frameRate: 5,
      frames: this.anims.generateFrameNumbers("rogue", { start: 40, end: 49 }),
    });
    let rogue = this.rogue;
    this.skely.on("pointerup", function () {
      rogue.play("dead");
    });
  }

  update(time, delta) {}
}

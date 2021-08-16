import Player from "./NPCs/playerTest.js";
import Minotaur from "./NPCs/creep.js";
export default class Play extends Phaser.Scene {
  constructor() {
    super({ key: "play" });
  }

  preload() {}

  create() {
<<<<<<< HEAD
    ////////// PLAYER
    let player = new Player({ scene: this, x: 400, y: 300 });
    player.patk = 1;

=======
    
>>>>>>> 3925c69f6a91321ce4743f2ab98a8e676ac626a7
    ////////// MINOTAUR
    let minotaur = new Minotaur({ scene: this, x: 500, y: 200 });
    
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
    ////////// PLAYER
    let player = new Player(
      this,
      200,
      300,
      "player",
      0,
      10,
      1
    );
    console.log(player.hp, player.damage)
    
  }

  update(time, delta) {}
}

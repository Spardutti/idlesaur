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
  }

  create() {
    ////////// PLAYER
    this.player = this.add
      .sprite(400, 300, "player")
      .setOrigin(0)
      .setInteractive(); // 0,0 esquina superior izquierda
    this.player.flipX = true;
    this.player.on("pointerdown", function () {
      this.setScale(2);
    });
    this.player.on("pointerup", function () {
      this.setScale(1);
    });

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

    this.timer = 0;
  }

  update(time, delta) {
    this.timer += delta;
    while (this.timer > 1000) {
      this.skely.x += 20;
      this.timer -= 1000;
      setTimeout(() => {
        this.skely.x -= 20;
      }, 500);
    }
  }
}

export default class Play extends Phaser.Scene {
  constructor() {
    super({ key: "play" });
  }

  preload() {
    this.load.image("player", "assets/images/player.png");
    this.load.image("skely", "assets/images/skely.png");
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
    this.player.hp = 100;
    console.log(this.player.hp);
  }

  update(time, delta) {
    setTimeout(() => {
      this.skely.angle++;
    }, 1000);
  }
}

export class Game extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
  }

  preload() {
    this.load.image("background", "/assets/Fakebook.png");
    this.load.image("player", "/assets/player1.png");
  }

  create() {
    this.add.image(400, 300, "background");
    this.add.image(200, 500, "player");
  }
}

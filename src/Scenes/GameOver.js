export default class GameOver extends Phaser.Scene {
  constructor() {
    super({ key: "GameOver" });
  }
  create() {
    this.add.text(300, 400, "Game Over");
  }
}

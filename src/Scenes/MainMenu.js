import GameScene from "./GameScene.js";

export default class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: "MainMenu" });
  }
  preload() {}
  create() {
    this.add.text(150, 200, "Main Menu");
    this.playText = this.add.text(300, 200, "Play").setInteractive();
    this.playText.on("pointerdown", function () {
      this.scene.scene.add("GameScene", GameScene);
      this.scene.scene.start("GameScene");
    });
  }
  update(time, delta) {}
}

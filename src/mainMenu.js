import Play from "../src/play.js";

export default class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: "mainMenu" });
  }
  preload() {
    // this.load.image("background", "assets/images/Grass_04.png");
  }
  create() {
    //this.add.image(0, 0, "background").setOrigin(0);

    this.add.text(150, 200, "Main Menu");

    this.playText = this.add.text(300, 200, "Play").setInteractive();
    // mostrar scena dinamicamente ??
    this.playText.on("pointerdown", function () {
      this.scene.scene.add("play", Play);
      this.scene.scene.start("play");
    });
  }
  update(time, delta) {}
}

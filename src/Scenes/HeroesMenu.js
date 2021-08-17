/*export default class HeroesMenu extends Phaser.Scene {
  constructor() {
    super({ key: "HeroesMenu" });
  }
  preload() {
    let HeroesMenuBox = this.add.rectangle(400, 600, 700, 300, 0x6666ff);
    HeroesMenuBox.setOrigin(0.5, 1);


  
  }
}*/

const HeroesMenu = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function HeroesMenu() {
    Phaser.Scene.call(this, "HeroesMenu");
  },

  init: function (data) {
    let HeroesMenuBox = this.add.rectangle(400, 600, 700, 300, 0x6666ff);
    HeroesMenuBox.setOrigin(0.5, 1);
    this.add.text(300, 300, "Hero Hp: " + data.hp);
    let closeButton = this.add.text(680, 580, "Close").setInteractive();
    closeButton.on("pointerdown", function () {
      this.scene.scene.stop("HeroesMenu");
    });
  },
});

export default HeroesMenu;

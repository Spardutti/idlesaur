import MainMenu from "../src/mainMenu.js";

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "container",
  // backgroudColor: color,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 10 },
    },
  },
  scene: { preload, create },
};

let game = new Phaser.Game(config);

function preload() {
  var progressBar = this.add.graphics();
  var progressBox = this.add.graphics();
  progressBox.fillStyle(0x222222, 0.8);
  progressBox.fillRect(240, 270, 320, 50);

  this.load.image("player", "assets/images/player.png");
  this.load.image("skely", "assets/images/skely.png");
  this.load.spritesheet("minotaur", "assets/images/minotaur.png", {
    frameWidth: 48,
    frameHeight: 48,
  });
  this.load.spritesheet("rogue", "assets/images/rogue.png", {
    frameWidth: 32, // image width divided by the number of elements 320px/30 = 32
    frameHeight: 32, // image height divided by the number of elements 320px/30 = 32
  });

  this.load.on("progress", function (value) {
    progressBar.clear();
    progressBar.fillStyle(0xffffff, 1);
    progressBar.fillRect(250, 280, 300 * value, 30);
  });

  this.load.on("complete", function () {
    progressBar.destroy();
    progressBox.destroy();
  });
}

function create() {
  this.scene.add("mainMenu", MainMenu);
  this.scene.start("mainMenu");
}

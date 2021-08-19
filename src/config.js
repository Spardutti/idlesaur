import MainMenu from "./Scenes/MainMenu.js";
import HeroesMenu from "./Scenes/HeroesMenu.js";


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
  //// ROGUE ANIMATIONS
  this.anims.create({
    key: "rogueWalk",
    repeat: -1, // -1 repeats for ever. //2 repeats twice, etc
    frameRate: 5,
    frames: this.anims.generateFrameNumbers("rogue", { start: 20, end: 29 }), // loop from image 20, to image 29. repeat
  });

  this.anims.create({
    key: "rogueDead",
    frameRate: 5,
    frames: this.anims.generateFrameNumbers("rogue", { start: 40, end: 49 }),
  });
  this.anims.create({
    key: "minoDead",
    frameRate: 5,
    frames: this.anims.generateFrameNumbers("minotaur", { start: 40, end: 49 }),
  });

  //SCENES
  this.scene.add("HeroesMenu", HeroesMenu);

  //// LOAD MAIN SCENE
  this.scene.add("MainMenu", MainMenu);
  this.scene.start("MainMenu");
}

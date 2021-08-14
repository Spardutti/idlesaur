import MainMenu from "../src/mainMenu.js";
import Play from "../src/play.js";

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
  scene: [MainMenu, Play],
};

let game = new Phaser.Game(config);

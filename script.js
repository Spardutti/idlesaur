import { Game } from "./Functions/game";

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 10 },
    },
  },
  scene: [Game],
};

let game = new Phaser.Game(config);

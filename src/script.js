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
  scene: [MainMenu],
};

let game = new Phaser.Game(config);

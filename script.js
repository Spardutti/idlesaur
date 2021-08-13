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
  scene: { preload, create, update },
};

let player;
let gameOver = false;

let game = new Phaser.Game(config);

function preload() {
  this.load.image("grass", "assets/Grass_04.png");
  this.load.image("player", "assets/player.png");
}

function create() {
  this.add.image(400, 300, "grass");
  player = this.add.sprite(200, 500, "player");
}

function update() {}

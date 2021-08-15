export default class Player extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "player"); // scene, coordenadas, nombre de la imagen
    config.scene.add.existing(this);
    this.setInteractive();

    //// EVENTS
    this.on("pointerdown", function () {
      this.attack();
    });

    //// STATS
    Player.prototype.pAtk = 1;
  }

  //// METHODS
  attack() {
    console.log("attack");
  }
}
export default class Player extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "player"); // scene, coordinadas, nombre de la imagen
    config.scene.add.existing(this);
    this.setInteractive();
    this.on("pointerdown", function () {
      this.attack();
    });
    Player.hp = 100;
    Player.prototype.pAtk = 1;
  }
  attack() {
    console.log("attack", this.hp, this.pAtk);
  }
}

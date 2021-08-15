export default class Player extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "player"); // scene, coordenadas, nombre de la imagen
    config.scene.add.existing(this);
    this.setInteractive();

    //// EVENTS
    this.on("pointerdown", function () {
      this.attack();
    });
<<<<<<< HEAD
    Player.hp = 100;
    Player.prototype.pAtk = 1;
  }
=======

    //// STATS
    Player.prototype.pAtk = 1;
  }

  //// METHODS
>>>>>>> dad3df1c5c40cfeaea8d4b97c42e86d8d5b95cd5
  attack() {
    console.log("attack", this.hp, this.pAtk);
  }
}
import Heroes from "../NPCs/Heroes.js";
import GameOver from "./GameOver.js";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }
  preload() {}

  create() {
    let scene = this.scene;
    scene.add("GameOver", GameOver);

    ////////// MINOTAUR
    let minotaur = new Heroes(this, 450, 300, "minotaur", 0, 100, 10);
    this.add.existing(minotaur);
    minotaur.on("pointerdown", function () {
      scene.start("GameOver");
    });

    ////////// PLAYER
    let rogue = new Heroes(this, 200, 300, "rogue", 0, 100, 1);
    this.add.existing(rogue);

    let timed = this.time.addEvent({
      delay: 1000,
      callback: function () {
        if (rogue.hp > 0) {
          minotaur.attack(rogue);
        } else {
          rogue.play("rogueDead");
          setInterval(() => {
            scene.start("GameOver");
          }, 2000);
          timed.destroy();
        }
      },
      loop: true,
    });

    rogue.play("rogueWalk");
  }

  update(time, delta) {}
}

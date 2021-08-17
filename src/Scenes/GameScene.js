////NPC'S IMPORTS
import Heroes from "../NPCs/Heroes.js";
import Boss from "../NPCs/Boss.js";
import Enemy from "../NPCs/Enemy.js";
import MainPlayer from "../NPCs/MainPlayer.js"
////SCENES IMPORTS
import GameOver from "./GameOver.js";
////ITEMS IMPORTS
import Experience from "../Items/Experience.js"
import Gold from "../Items/Gold.js"

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }
  preload() {}

  create() {
    let scene = this.scene;
    scene.add("GameOver", GameOver);

    //// EXPERIENCE ITEM
    let experience = new Experience(0);
    console.log(experience.quantity)

    ////////// MINOTAUR
    let minotaur = new Enemy(this, 450, 300, "minotaur", 0, 10, 10, 10, 10, 5);
    this.add.existing(minotaur);
    console.log(minotaur.exp)
    minotaur.on("pointerdown", function () {
      scene.start("GameOver");
    });

    ////////// PLAYER
    let rogue = new Heroes(this, 200, 300, "rogue", 0, 100, 1, 1, 0, 3);
    this.add.existing(rogue);
    rogue.play("rogueWalk");

    // MAKE PLAYER ATTACK
    let playerAutoAttack = this.time.addEvent({
      delay: 1000 / rogue.atkSpeed,
      callback: function () {
        if (minotaur.hp > 0) {
          rogue.attack(minotaur);
        } else {
          experience.quantity += minotaur.exp;
          console.log(experience.quantity)
          minotaur.play("minoDead");
          playerAutoAttack.paused = true;
          setTimeout(() => {
            console.log("hola")
            minotaur.destroy();
            playerAutoAttack.pause = false;
            console.log(minotaur.hp)
          }, 2000);
          }
      },
      loop: true,
    });
    /*
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
  }
*/
  }
  update(time, delta) {}
}

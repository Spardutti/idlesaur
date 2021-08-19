////NPC'S IMPORTS
import Heroes from "../NPCs/Heroes.js";
import Boss from "../NPCs/Boss.js";
import Enemy from "../NPCs/Enemy.js";
import MainPlayer from "../NPCs/MainPlayer.js";
////SCENES IMPORTS
import GameOver from "./GameOver.js";
import HeroesMenu from "./HeroesMenu.js";
//// ITEMS IMPORTS
import Experience from "../Items/Experience.js";
import Gold from "../Items/Gold.js";
//// BUTTONS IMPORTS
import GrindButton from "../Buttons/GrindButton.js"

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }
  preload() {}

  create() {
    let scene = this;
    this.scene.add("GameOver", GameOver);

    //// GRIND ITEMS
    let exp = new Experience(0);
    let gold = new Gold(0);
    console.log(exp.quantity, gold.quantity)
    ////BAG ITEMS
    let bag = {
      exp: 0,
      gold: 0,
    }

    ////GRIND BUTTON
    this.grind = new GrindButton(this, 350, 500, "Grind Me!");
    this.add.existing(this.grind)

    //// CREATE NPCS ENEMIES
    const createNpc = function (
      scene,
      x,
      y,
      texture,
      frame,
      hp,
      damage,
      level,
      exp,
      gold
    ) {
      return new Enemy(scene, x, y, texture, frame, hp, damage, level, exp, gold);
    };

    let enemies = [];
    let textures = ["minotaur", "skely"];

    // CREATE 3 RANDOM NPCS
    for (let i = 0; i < 3; i++) {
      let chooseTexture = Math.floor(Math.random() * textures.length);
      let npc = createNpc(
        scene,
        (i + 3) * 100,
        300,
        textures[chooseTexture],
        0,
        10,
        1,
        1,
        1,
        1
      );
      enemies.push(npc);
      this.add.existing(npc);
      //
    }

    //// PLAYER
    let rogue = new Heroes(this, 200, 300, "rogue", 0, 100, 1, 1, 0, 3);
    rogue.on("pointerdown", function () {
      this.scene.scene.launch("HeroesMenu", { hp: rogue.hp });
    });
    this.add.existing(rogue);
    rogue.play("rogueWalk");

    //// MAKE PLAYER ATTACK
    function playerATtack(target = undefined) {
      if (!enemies.length) return;
      // GETS A NEW TARGET
      if (target === undefined) {
        target = Math.floor(Math.random() * enemies.length);
      }
      let selectedTarget = enemies[target];
      // CHECK IF TARGET IS ALIVE
      if (selectedTarget.hp > 0) {
        rogue.attack(selectedTarget);
        // EXECUTES A NEW ATTACK ON SAME TARGET
        setTimeout(() => {
          playerATtack(target);
        }, 1000 / rogue.atkSpeed);
      } else {
        // NEED TO ADD NEW ANIMATIOSN FOR SKELY
        selectedTarget.play("minoDead");
        gold.quantity += selectedTarget.gold;
        exp.quantity += selectedTarget.exp;
        console.log(exp.quantity, gold.quantity, bag.gold, bag.exp)
        // WAITS FOR DEAD ANIMATION
        selectedTarget.on(
          Phaser.Animations.Events.ANIMATION_COMPLETE,
          function () {
            selectedTarget.destroy();
            enemies.splice(target, 1);
            // EXECUTES A NEW ATTACK ON NEW TARGET
            playerATtack(undefined);
            // MINI TIME OUT TO LET THE ENEMY DISSAPEAR BEFORE ADDING A NEW ONE
            setTimeout(() => {
              let rnd = Math.floor(Math.random() * textures.length);
              let newNpc = createNpc(
                scene,
                selectedTarget.x,
                300,
                textures[rnd],
                0,
                10,
                1,
                1,
                1,
                1
              );
              scene.add.existing(newNpc);
              enemies.push(newNpc);
            }, 500);
          }
        );
      }
    }
    playerATtack();
    //
    //// OPEN MENU ON PLAYER CLICK
    rogue.on("pointerdown", function () {
      this.scene.scene.launch("HeroesMenu", { hp: rogue.hp });
    });
    this.grind.on("pointerup", function() {
      bag.exp += exp.quantity;
      exp.quantity = 0;
      bag.gold += gold.quantity;
      gold.quantity = 0;
    })
  }
  update(time, delta) {}
}



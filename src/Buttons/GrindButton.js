export default class GrindButton extends Phaser.GameObjects.Text {
    constructor(scene, x, y, text) {
        super(scene, x, y, text);
        
        this.setInteractive();
    }
}

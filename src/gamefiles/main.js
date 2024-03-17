import Phaser from "phaser";

export default new Phaser.Game({
    type: Phaser.WEBGL,
    pixelArt: true,
    scale: {
        mode: Phaser.DOM.RESIZE,
        width: 1920,
        height: 1024,
    },
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true,
        }
    },
    scene: [

    ]
});
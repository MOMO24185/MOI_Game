import MainGameScene from '/static/GameScene.js';

var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 1000,
	pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0, x: 0 },
			debug: true
        }
    },
	scene: [ MainGameScene ],
    scale: {
        parent: 'yourgamediv',
        mode: Phaser.Scale.FIT,
        width: 500,
        height: 500
    }
};

var game = new Phaser.Game(config);
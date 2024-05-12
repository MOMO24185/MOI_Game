import MainGameScene from '/static/GameScene.js';
import { earnMoney, spendMoney, saveMoney, loadMoney } from '/static/moneyFunctions.js';
import { saveCar, loadCar, interactWithCar, carMovement } from '/static/carStatus.js';
import { playerMovement } from '/static/character.js';

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
	scene: [MainGameScene],
    scale: {
        parent: 'yourgamediv',
        mode: Phaser.Scale.FIT,
        width: 500,
        height: 500
    }
};

var game = new Phaser.Game(config);
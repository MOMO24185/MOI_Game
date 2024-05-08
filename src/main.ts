import Phaser from 'phaser'

import Preloader from './scenes/Preloader.ts'
import Game from './scenes/Game.ts'

export default new Phaser.Game({
	type: Phaser.AUTO,
    width: 400,
    height: 250,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0, x: 0 },
			debug: false
        }
    },
    scene: [Preloader, Game],
	scale: {
		zoom: 2
	}
})
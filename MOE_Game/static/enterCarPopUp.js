import { loadInsideCar, setInsideCar } from "/static/carStatus.js";

// Define an overlay scene
export default class enterCarPopUpScene extends Phaser.Scene {
    constructor() {
        super({ key: 'enterCarPopUpScene',
		transparent: true });
    }

	preload()
	{
		// Load UI Images
		this.load.image('dialogBox', 'static/assets/Sprites/UI_popup.png');
		this.load.image('underText', 'static/assets/Sprites/Under_text.png');
		this.load.image('buttonPress', 'static/assets/Sprites/Button_press.png');
		this.load.image('button', 'static/assets/Sprites/Button.png');
	}

    create() {
        // Add UI elements for your overlay scene
        const dialogBox = this.add.image(250, 180, 'dialogBox');
		dialogBox.setScale(0.2, 0.15);
		// First text box area
		this.add.text(180, 125, 'Would you like to enter this car?', {
			fontSize: '16px',
			fill: '#000',
			wordWrap: { width: 150, useAdvancedWrap: true }
		});
        const button = this.add.image(300, 140 + 60, 'button');
		this.add.text(290, 140 + 53, 'No', {
			fontSize: '16px',
			fill: '#000',
			wordWrap: { width: 150, useAdvancedWrap: true }
		});
		button.setScale(1.0);
		button.setInteractive();
		button.on('pointerdown', function() {
			// Change the button texture to the pressed down state
			console.log('button pressed');
			button.setTexture('buttonPress');
			var InsideCar = loadInsideCar();
			setInsideCar(InsideCar, 0);
		});
		button.on('pointerup', () => {
			button.setTexture('button');
			this.scene.stop('enterCarPopUpScene');
		});
        // second text box area
        const button2 = this.add.image(200, 140 + 60, 'button');
		this.add.text(185, 140 + 53, 'Yes', {
			fontSize: '16px',
			fill: '#000',
			wordWrap: { width: 150, useAdvancedWrap: true }
		});
		button2.setScale(1.0);
		button2.setInteractive();
		button2.on('pointerdown', function() {
			// Change the button texture to the pressed down state
			console.log('button pressed');
			button2.setTexture('buttonPress');
			var InsideCar = loadInsideCar();
			setInsideCar(InsideCar, 1);
		});
		button2.on('pointerup', () => {
			button2.setTexture('button');
			this.scene.stop('enterCarPopUpScene');
		});
    }
}
import { spendMoney } from "/static/moneyFunctions.js";
import { loadRegistration } from "/static/registerFunctions.js";
import { loadLicense } from "/static/licenseFunctions.js";
import { saveCar } from "/static/carStatus.js";

// Define an overlay scene
export default class buyCarPopUpScene extends Phaser.Scene {
    constructor() {
        super({ key: 'buyCarPopUpScene',
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
		this.add.text(180, 125, 'Would you like to buy this car?', {
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
			// handleButtonClick();
		});
		button.on('pointerup', () => {
			button.setTexture('button');
			this.scene.stop('buyCarPopUpScene');
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
			// handleButtonClick();
		});
		button2.on('pointerup', () => {
			button2.setTexture('button');
			if (loadLicense() == 1 && loadRegistration() == 1 && spendMoney(2000) == true)
			{
				button2.setTint(0x00FF00);
				saveCar(1);
				this.scene.stop('buyCarPopUpScene');
			}
			else
			{
				button2.setTint(0xFF0000);
				setTimeout(() => {
					this.scene.stop('buyCarPopUpScene'); // Reset collision cooldown after a certain period
				}, 2000); // Adjust the cooldown period as needed (in milliseconds)
			}
		});
    }
}
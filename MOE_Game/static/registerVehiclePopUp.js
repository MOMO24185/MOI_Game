import { spendMoney } from "/static/moneyFunctions.js";
import { addRegistration } from "/static/registerFunctions.js";

// Define an overlay scene
export default class registerVehiclePopUp extends Phaser.Scene {
    constructor() {
        super({ key: 'registerVehiclePopUp',
		transparent: true });
    }

	preload()
	{
		this.eid = false;
		this.fee = false;
		// Load UI Images
		this.load.image('dialogBox', 'static/assets/Sprites/UI_popup.png');
		this.load.image('underText', 'static/assets/Sprites/Under_text.png');
		this.load.image('buttonPress', 'static/assets/Sprites/Button_press.png');
		this.load.image('button', 'static/assets/Sprites/Button.png');
	}

    create() {
        // Add UI elements for your overlay scene
        const dialogBox = this.add.image(250, 245, 'dialogBox');
		dialogBox.setScale(0.3);
		//Title
		this.add.text(150, 120, 'Register Vehicle Service', {
			fontSize: '16px',
			fill: '#000',
			wordWrap: { width: 200, useAdvancedWrap: true }
		});
		// First text box area
        const underText = this.add.image(205, 155 + 20, 'underText');
		underText.setScale(0.3);
        const button = this.add.image(330, 142 + 20, 'button');
		button.setScale(1.0);
		this.add.text(317, 142 + 12, 'Add', {
			fontSize: '12px',
			fill: '#000',
			wordWrap: { width: 100, useAdvancedWrap: true }
		});
		this.add.text(150, 140 + 20, 'Emirates ID', {
			fontSize: '16px',
			fill: '#000',
			wordWrap: { width: 150, useAdvancedWrap: true }
		});
		button.setInteractive();
		button.on('pointerdown', () => {
			// Change the button texture to the pressed down state
			console.log('button pressed');
			button.setTexture('buttonPress');
		});
		button.on('pointerup', () => {
			button.setTexture('button');
			button.setTint(0x00FF00);
			this.eid = true;
		});
        // second text box area
        const underText2 = this.add.image(205, 155 + 80, 'underText');
		underText2.setScale(0.3);
        const button2 = this.add.image(330, 142 + 80, 'button');
		button2.setScale(1.0);
		this.add.text(317, 142 + 72, 'Pay', {
			fontSize: '12px',
			fill: '#000',
			wordWrap: { width: 100, useAdvancedWrap: true }
		});
		this.add.text(150, 140 + 65, 'Fee: 350 AED', {
			fontSize: '16px',
			fill: '#000',
			wordWrap: { width: 150, useAdvancedWrap: true }
		});
		button2.setInteractive();
		button2.on('pointerdown', () => {
			// Change the button texture to the pressed down state
			console.log('button pressed');
			button2.setTexture('buttonPress');
			if (spendMoney(350) == true)
			{
				button2.setTint(0x00FF00);
				this.fee = true;
			}
			else
			{
				button2.setTint(0xFF0000);
				setTimeout(() => {
					this.scene.remove('registerVehiclePopUp'); // Reset collision cooldown after a certain period
				}, 2000); // Adjust the cooldown period as needed (in milliseconds)
			}
		});
		button2.on('pointerup', () => {
			button2.setTexture('button');
		});
		// close button
        const closeButton = this.add.image(260, 350, 'button');
		closeButton.setScale(1.2);
		this.add.text(237, 340, 'Submit', {
			fontSize: '14px',
			fill: '#000',
			wordWrap: { width: 150, useAdvancedWrap: true }
		});
		closeButton.setInteractive();
		closeButton.on('pointerdown', () => {
			// Change the button texture to the pressed down state
			console.log('close button pressed');
			closeButton.setTexture('buttonPress');
		});
		closeButton.on('pointerup', () => {
			closeButton.setTexture('button');
			if (this.eid == true && this.fee == true)
			{
				console.log('close button pressed');
				addRegistration();
				this.scene.remove('registerVehiclePopUp');
			}else{
				closeButton.setTint(0xFF0000);
				   setTimeout(() => {
					this.scene.remove('registerVehiclePopUp'); // Reset collision cooldown after a certain period
				}, 2000); // Adjust the cooldown period as needed (in milliseconds)
				}
		});
    }
}
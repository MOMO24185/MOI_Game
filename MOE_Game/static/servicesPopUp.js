import vehicleLicensePopUp from "/static/vehicleLicensePopUp.js";
import registerVehiclePopUp from "/static/registerVehiclePopUp.js";
import payFinePopUp from "/static/payFinePopUp.js";

// Define an overlay scene
export default class servicesPopUpScene extends Phaser.Scene {
    constructor() {
        super({ key: 'servicesPopUpScene',
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
        const dialogBox = this.add.image(250, 245, 'dialogBox');
		dialogBox.setScale(0.3);
		// First text box area
        const underText = this.add.image(205, 155, 'underText');
		underText.setScale(0.3);
        const button = this.add.image(330, 142, 'button');
		button.setScale(1.0);
		this.add.text(150, 140, 'Pay Fines Service', {
			fontSize: '16px',
			fill: '#000',
			wordWrap: { width: 150, useAdvancedWrap: true }
		});
		button.setInteractive();
		button.on('pointerdown', function() {
			// Change the button texture to the pressed down state
			console.log('button pressed');
			button.setTexture('buttonPress');
			// handleButtonClick();
		});
		button.on('pointerup', () => {
			const payFines = new payFinePopUp();
	
			button.setTexture('button');
			this.scene.add('payFinePopUp', payFines);
			this.scene.start('payFinePopUp');
			this.scene.remove('servicesPopUpScene');
		});
        // second text box area
        const underText2 = this.add.image(205, 155 + 60, 'underText');
		underText2.setScale(0.3);
        const button2 = this.add.image(330, 142 + 60, 'button');
		button2.setScale(1.0);
		this.add.text(150, 140 + 60, 'Apply for Light Vehicle License', {
			fontSize: '16px',
			fill: '#000',
			wordWrap: { width: 150, useAdvancedWrap: true }
		});
		button2.setInteractive();
		button2.on('pointerdown', function() {
			// Change the button texture to the pressed down state
			console.log('button pressed');
			button2.setTexture('buttonPress');
			// handleButtonClick();
		});
		button2.on('pointerup', () => {
			const license = new vehicleLicensePopUp();

			button2.setTexture('button');
			this.scene.add('vehicleLicensePopUp', license);
			this.scene.start('vehicleLicensePopUp');
			this.scene.remove('servicesPopUpScene');
		});
		// third text box area
        const underText3 = this.add.image(205, 155 + 120, 'underText');
		underText3.setScale(0.3);
        const button3 = this.add.image(330, 142 + 120, 'button');
		button3.setScale(1.0);
		this.add.text(150, 140 + 120, 'Register Vehicle', {
			fontSize: '16px',
			fill: '#000',
			wordWrap: { width: 150, useAdvancedWrap: true }
		});
		button3.setInteractive();
		button3.on('pointerdown', function() {
			// Change the button texture to the pressed down state
			console.log('button pressed');
			button3.setTexture('buttonPress');
			// handleButtonClick();
		});
		button3.on('pointerup', () => {
			const register = new registerVehiclePopUp();

			button3.setTexture('button');
			this.scene.add('registerVehiclePopUp', register);
			this.scene.start('registerVehiclePopUp');
			this.scene.remove('servicesPopUpScene');
		});
		// close button
        const closeButton = this.add.image(260, 350, 'button');
		closeButton.setScale(1.2);
		this.add.text(237, 340, 'Close', {
			fontSize: '14px',
			fill: '#000',
			wordWrap: { width: 150, useAdvancedWrap: true }
		});
		closeButton.setInteractive();
		closeButton.on('pointerdown', function() {
			// Change the button texture to the pressed down state
			console.log('close button pressed');
			closeButton.setTexture('buttonPress');
		});
		closeButton.on('pointerup', () => {
			closeButton.setTexture('button');
			this.scene.remove('servicesPopUpScene');
		});
    }
}
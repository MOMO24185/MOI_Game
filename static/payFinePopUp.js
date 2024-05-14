// Define an overlay scene
export default class payFinePopUp extends Phaser.Scene {
    constructor() {
        super({ key: 'payFinePopUp',
		transparent: true });
    }

	preload()
	{
		this.eid = false;
		this.regist = false;
		this.license = false;
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
		this.add.text(150, 120, 'Pay Fines Service', {
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
		button.on('pointerdown', function() {
			// Change the button texture to the pressed down state
			console.log('button pressed');
			button.setTexture('buttonPress');
			// handleButtonClick();
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
		this.add.text(317, 142 + 72, 'Add', {
			fontSize: '12px',
			fill: '#000',
			wordWrap: { width: 100, useAdvancedWrap: true }
		});
		this.add.text(150, 140 + 65, 'Vehicle Registration', {
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
			button2.setTexture('button');
			button2.setTint(0x00FF00);
			this.regist = true;
		});
		// third text box area
        const underText3 = this.add.image(205, 155 + 140, 'underText');
		underText3.setScale(0.3);
        const button3 = this.add.image(330, 142 + 140, 'button');
		button3.setScale(1.0);
		this.add.text(317, 142 + 132, 'Add', {
			fontSize: '12px',
			fill: '#000',
			wordWrap: { width: 100, useAdvancedWrap: true }
		});
		this.add.text(150, 140 + 125, 'Driving License', {
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
			button3.setTexture('button');
			button3.setTint(0x00FF00);
			this.license = true;
		});
		// close button
        const closeButton = this.add.image(330, 350, 'button');
		closeButton.setScale(1.2);
		this.add.text(150, 342, 'Fine Amount: ' + 200, {
			fontSize: '14px',
			fill: '#000',
			wordWrap: { width: 150, useAdvancedWrap: true }
		});
		this.add.text(317, 342, 'Pay', {
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
			if (this.eid == true && this.regist == true && this.license == true)
				this.scene.remove('payFinePopUp');
		});
    }
}
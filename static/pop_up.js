// Define an overlay scene
export default class PopUpScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PopUpScene',
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
        const dialogBox = this.add.image(250, 250, 'dialogBox');
		dialogBox.setScale(0.3);
        const underText = this.add.image(205, 160, 'underText');
		underText.setScale(0.3);
        const button = this.add.image(330, 147, 'button');
		button.setScale(1.0);
		this.add.text(150, 145, 'Information', {
			fontSize: '16px',
			fill: '#000',
			wordWrap: { width: 200, useAdvancedWrap: true }
		});
        // Other UI elements...
    }
}
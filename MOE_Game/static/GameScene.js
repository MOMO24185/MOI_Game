import { loadCharacterAnims, playerMovement } from "/static/character.js";
import { interactWithCar, loadCar, startCollisionCooldown, carMovement, handleExitCar, loadInsideCar, setInsideCar, handleEnterCar } from "/static/carStatus.js";
import { loadRegistration, addRegistration, saveRegistration } from "/static/registerFunctions.js";
import { loadLicense, addLicense, saveLicense } from "/static/licenseFunctions.js";
import { loadFine, addFine, saveFine, payFine } from "/static/fineFunctions.js";
import { loadMoney, earnMoney, spendMoney, saveMoney } from "/static/moneyFunctions.js";
import servicesPopUpScene from "/static/servicesPopUp.js";
import buyCarPopUpScene from "/static/buyCarPopUp.js";
import enterCarPopUpScene from "/static/enterCarPopUp.js";

class MainGameScene extends Phaser.Scene {
	constructor() {
		super({ key: 'MainGameScene',
		transparent: true });
	}
	
	preload()
	{
		// Load Images
		this.load.image('buildings', 'static/assets/Tilesets/Buildings-Sheet.png');
		this.load.image('city', 'static/assets/Tilesets/Road-Sheet.png');
		this.load.image('FireStation', 'static/assets/Tilesets/FireStation.png');
		this.load.image('PoliceStation', 'static/assets/Tilesets/PoliceStation.png');
		this.load.image('Objects', 'static/assets/Tilesets/Tiles.png');
		this.load.image('Trees', 'static/assets/Tilesets/Tree-Sheet.png');
		this.load.image('Interiors', 'static/assets/Tilesets/Interiors.png');
		this.load.image('Room_Builder', 'static/assets/Tilesets/Room_Builder.png');
		// Load car sprite
		this.load.image('car', 'static/assets/Sprites/car2.png');
		// Load tilemap
		this.load.tilemapTiledJSON('city', 'static/assets/Tilemaps/map.json');
		this.load.tilemapTiledJSON('room', 'static/assets/Tilemaps/room.json');
		this.load.tilemapTiledJSON('villa', 'static/assets/Tilemaps/villa.json');
		// Load player sprite sheet
		this.load.atlas('player', 'static/assets/Sprites/character/character.png', 'static/assets/Sprites/character/character.json');
		// Load welcome message
		this.load.atlas('welcomeMessage', 'static/assets/Tilesets/Text/welcome.png', 'static/assets/Tilesets/Text/welcome.json');
		
		// Define interaction areas
		this.interacting = false;
		this.interactionArea = this.add.rectangle(600, 310, 50, 50, 0xff0000); // 50x50 interaction area at police station entrance
		this.physics.add.existing(this.interactionArea, true); // Enable physics for collision detection
	}

    create()
	{
		//Adding some dialog scenes
		const enterCar = new enterCarPopUpScene();
		this.scene.add('enterCarPopUpScene', enterCar);
		const buyCar = new buyCarPopUpScene();
		this.scene.add('buyCarPopUpScene', buyCar);
		// Define Speed
		this.carStatus = 0;
		this.speed = 250;
		this.confirmationDialogOpened = false;
		this.collisionCooldown = false;
		// Set up users money
		this.registration  = 0;
		this.license = 0;
		this.fine = 0;
		// Make tilemap
		this.map = this.make.tilemap({ key: 'city' })
		// Load UI elements outside of visible range
		this.dialogBox = this.add.image(-1000, -1000, 'dialogBox');
		this.button = this.add.image(-1000, -1000, 'button');
		this.buttonPress = this.add.image(-1000, -1000, 'buttonPress');
		// add Tilesets to map
		const buildings = this.map.addTilesetImage('buildings', 'buildings')
		const city = this.map.addTilesetImage('city', 'city')
		const FireStation = this.map.addTilesetImage('FireStation', 'FireStation')
		const PoliceStation = this.map.addTilesetImage('PoliceStation', 'PoliceStation')
		const Objects = this.map.addTilesetImage('Objects', 'Objects')
		const Trees = this.map.addTilesetImage('Trees', 'Trees')

		this.player = this.textures.get('player')

		// add Tilesets to map layers
		const cityTiles = [city, Objects, buildings, FireStation, PoliceStation, Trees];
		this.map.createLayer('background', cityTiles);
		this.map.createLayer('Floor', cityTiles);
		const borderLayer = this.map.createLayer('Border', cityTiles);
		const objectsLayer = this.map.createLayer('Objects', cityTiles);
		//Adding player sprite
		this.player = this.physics.add.sprite(400, 965, 'player', 'idle_down_1.png');
		this.player.setBodySize(10, 10);
		this.player.insideCar = 0;
		setInsideCar(this.player.insideCar, 0)
		//Adding car sprite
		const rotationInDegrees = 67.5;
		const rotationInRadians = Phaser.Math.DegToRad(rotationInDegrees);
		this.car = this.physics.add.sprite(1120, 690, 'car').setRotation(rotationInDegrees);
		this.car.setScale(0.23);
		this.car.setBodySize(260, 120);
		const buildingLayer = this.map.createLayer('Building', cityTiles);
		const treesLayer = this.map.createLayer('Trees', cityTiles);

		// add collision to layers based on 'collides' property
		borderLayer.setCollisionByProperty({ collides: true });
		objectsLayer.setCollisionByProperty({ collides: true });
		buildingLayer.setCollisionByProperty({ collides: true });
		treesLayer.setCollisionByProperty({ collides: true });

		//Set camera and physics bounds
		this.cameras.main.setBounds(0, 0, 1400, 1150);
		this.physics.world.setBounds(0, 0, 1400, 1150);

		this.cursors = this.input.keyboard.createCursorKeys();
		// Create spacebar key
		this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
		
		this.spacebar.on('down', interact, this);

		//Adding car collision
		this.car.setCollideWorldBounds(true);
		this.physics.add.collider(this.car, borderLayer, () => addFine(10), null, this);
		this.physics.add.collider(this.car, objectsLayer, () => addFine(25), null, this);
		this.physics.add.collider(this.car, buildingLayer, () => addFine(25), null, this);
		this.physics.add.collider(this.car, treesLayer, () => addFine(20), null, this);
		this.car.body.setImmovable(true);

		//Adding player collision
		this.player.setCollideWorldBounds(true);
		this.physics.add.collider(this.player, borderLayer);
		this.physics.add.collider(this.player, objectsLayer);
		this.physics.add.collider(this.player, buildingLayer);
		this.physics.add.collider(this.player, treesLayer);

		this.cameras.main.startFollow(this.player, true, 0.1, 0.1);

		this.cameras.main.followOffset.set(0, 0);
		//Loading money
		this.money = loadMoney(this);
		this.moneyText = this.add.text(10, 10, 'Money: ' + this.money, {
			fontSize: '24px',
			fill: '#000',
			wordWrap: { width: 200, useAdvancedWrap: true }
		});
		loadLicense(this);
		loadRegistration(this);
		this.fine = loadFine();
		saveFine(this.fine);
		loadCar(this);

		// Define interaction button
		this.interactionButton = this.add.text(400, 400, 'Interact', { fontFamily: 'Arial', fontSize: '24px', fill: '#ffffff' });
		this.interactionButton.setInteractive();
		this.interactionButton.on('spacedown', interact, this); // Set up event listener for button press

		// Create welcome message animation
		this.welcomeMessage = this.textures.get('welcomeMessage')
		this.welcomeMessage = this.add.sprite(400 + 35, 960 - 40, 'welcomeMessage', 'welcome0.png');
		this.welcomeMessage.setScale(0.30);
		this.welcomeMessage.anims.create({
			key: 'welcomeMessage',
			frames: this.anims.generateFrameNames('welcomeMessage', {start: 0, end: 37, prefix: 'welcome', suffix: '.png'}),
			repeat: 0,
			frameRate: 10
		});

		this.welcomeMessage.anims.play('welcomeMessage', true);
		this.welcomeMessage.on('animationcomplete', () => {
			// Close the scene after the animation completes
			this.time.delayedCall(2000, () => {
				// Stop the scene
				this.welcomeMessage.anims.stop();
				this.welcomeMessage.destroy();
			});
		});
		//Setting up character sprite
		//Preparing character animations
		//Idle anims
		loadCharacterAnims(this);
		// Preparing car and player collision for interactions
		this.physics.add.collider(this.car, this.player, interactWithCar, null, this);
	}

	showOverlay() {
        // Create an instance of OverlayScene
		const services = new servicesPopUpScene();

		// Add the overlay scene to the game
		this.scene.add('servicesPopUpScene', services);

		// Bring the overlay scene to the top to render it over the main game scene
		this.scene.launch('servicesPopUpScene');
    }

    update() 
	{
		this.money = loadMoney(this);
		this.moneyText.setText('Money: ' + this.money);
		loadLicense(this);
		loadRegistration(this);
		loadFine(this);
		loadCar(this);
		//Offset money UI with camera positioning
		this.camX = this.cameras.main.scrollX;
		this.camY = this.cameras.main.scrollY;
		this.welcomeMessage.x = this.player.x + 35;
		this.welcomeMessage.y = this.player.y - 40;
		this.moneyText.x = this.cameras.main.scrollX + 10;
		this.moneyText.y = this.cameras.main.scrollY + 10;
		if (this.player.insideCar == 0)
		{
			this.player.insideCar = loadInsideCar();
			if (this.player.insideCar == 1)
				handleEnterCar(this);
		}
		if (this.player.insideCar == 1)
		{
			this.player.insideCar = loadInsideCar();
			if (this.player.insideCar == 0)
				handleExitCar(this);
		}
		if (this.player.insideCar == 0)
		{
			playerMovement(this);
		}
		else
		{
			carMovement(this);
		}
    }
}

function interact(scene)
{
	console.log("Interacting");
	// Check if player is inside car
	if (this.player.insideCar == 1)
	{
		// If player is inside car, exit car
		this.player.insideCar = 0;
		setInsideCar(this.player.insideCar, 0);
		handleExitCar(this);
	}
	// Check for interaction with police station
	if (this.player.x >= this.interactionArea.getBounds().x &&
	 this.player.x <= this.interactionArea.getBounds().x + 50 && this.player.y >= this.interactionArea.getBounds().y 
	 && this.player.y <= this.interactionArea.getBounds().y + 50) {
		// If player is inside interaction area and not currently this.interacting, show button
		this.interactionButton.visible = true;
		policeStationInteract(this);
	} else {
		this.interactionButton.visible = false;
	}
}
function policeStationInteract(scene)
{
	console.log("Interacting with police station!");
	// Put interaction with police station code here
	scene.showOverlay();
}

export default MainGameScene;
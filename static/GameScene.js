import { loadCharacterAnims, playerMovement } from "/static/character.js";
import { interactWithCar, loadCar, saveCar, carMovement } from "/static/carStatus.js";
import { loadMoney, earnMoney, spendMoney, saveMoney } from "/static/moneyFunctions.js";
import PopUpScene from "/static/pop_up.js";

function interact(scene)
{
	console.log("Interacting");
	// console.log("Interaction area = " + this.interactionArea.getBounds().x + " " + this.interactionArea.getBounds().y + " Player = " + this.player.x + " " + this.player.y);
	// Check for interaction with police station
	if (scene.interacting === false && scene.player.x >= scene.interactionArea.getBounds().x &&
	 scene.player.x <= scene.interactionArea.getBounds().x + 50 && scene.player.y >= scene.interactionArea.getBounds().y 
	 && scene.player.y <= scene.interactionArea.getBounds().y + 50) {
		// If player is inside interaction area and not currently this.interacting, show button
		scene.interactionButton.visible = true;
		policeStationInteract(scene);
	} else {
		// Otherwise, hide button and do nothing
		// this.interactionButton.visible = false;
		console.log("Not interacting with police station!");
	}
}
function policeStationInteract(scene)
{
	console.log("Interacting with police station!");
	// Put interaction with police station code here
	scene.showOverlay();
}

class MainGameScene extends Phaser.Scene {
	constructor() {
		super({ key: 'MainGameScene',
		transparent: true });
	}
	
	preload()
	{
		this.interacting = false;
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
	}

    create()
	{
		// Define interaction areas
		this.interactionArea = this.add.rectangle(600, 310, 50, 50, 0xff0000); // 50x50 interaction area at police station entrance
		this.physics.add.existing(this.interactionArea, true); // Enable physics for collision detection
		// Define Speed
		this.speed = 150;
		this.confirmationDialogOpened = false;
		this.collisionCooldown = false;
		// Set up users money
		this.money = 0;
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
		this.welcomeMessage = this.textures.get('welcomeMessage')

		// add Tilesets to map layers
		const cityTiles = [city, Objects, buildings, FireStation, PoliceStation, Trees];
		this.map.createLayer('background', cityTiles);
		this.map.createLayer('Floor', cityTiles);
		const borderLayer = this.map.createLayer('Border', cityTiles);
		const objectsLayer = this.map.createLayer('Objects', cityTiles);
		//Adding player sprite
		this.player = this.physics.add.sprite(400, 965, 'player', 'idle_down_1.png');
		this.player.setBodySize(10, 10);
		//Adding car sprite
		this.car = this.physics.add.sprite(400, 800, 'car');
		this.car.setScale(0.23);
		this.car.setBodySize(120, 260);
		this.welcomeMessage = this.add.sprite(400 + 35, 960 - 40, 'welcomeMessage', 'welcome0.png');
		this.welcomeMessage.setScale(0.30);
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
		this.physics.add.collider(this.car, borderLayer);
		this.physics.add.collider(this.car, objectsLayer);
		this.physics.add.collider(this.car, buildingLayer);
		this.physics.add.collider(this.car, treesLayer);
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
		this.moneyText = this.add.text(10, 10, 'Money: ' + this.money, {
			fontSize: '24px',
			fill: '#000',
			wordWrap: { width: 200, useAdvancedWrap: true }
		});
		loadMoney(this);
		loadCar(this);

		// Define interaction button
		this.interactionButton = this.add.text(400, 400, 'Interact', { fontFamily: 'Arial', fontSize: '24px', fill: '#ffffff' });
		this.interactionButton.setInteractive();
		this.interactionButton.on('spacedown', interact, this); // Set up event listener for button press

		// Create welcome message animation
		this.welcomeMessage.anims.create({
			key: 'welcomeMessage',
			frames: this.anims.generateFrameNames('welcomeMessage', {start: 0, end: 37, prefix: 'welcome', suffix: '.png'}),
			repeat: 0,
			frameRate: 10
		});

		this.welcomeMessage.anims.play('welcomeMessage', true);
		//Setting up character sprite
		//Preparing character animations
		//Idle anims
		loadCharacterAnims(this);
		// Preparing car and player collision for interactions
		this.physics.add.collider(this.car, this.player, interactWithCar, null, this);
	}

	showOverlay() {
        // Create an instance of OverlayScene
		const popUpScene = new PopUpScene();

		// Add the overlay scene to the game
		this.scene.add('PopUpScene', popUpScene);

		// Bring the overlay scene to the top to render it over the main game scene
		this.scene.launch('PopUpScene');
    }

    update() 
	{
		//Offset money UI with camera positioning
		this.camX = this.cameras.main.scrollX;
		this.camY = this.cameras.main.scrollY;
		this.welcomeMessage.x = this.player.x + 35;
		this.welcomeMessage.y = this.player.y - 40;
		this.moneyText.x = this.cameras.main.scrollX + 10;
		this.moneyText.y = this.cameras.main.scrollY + 10;
		playerMovement(this);
    }
}

export default MainGameScene;
import { loadCharacterAnims, playerMovement } from "/static/character.js";
import { interactWithCar, loadCar, saveCar, carMovement } from "/static/carStatus.js";
import { loadMoney, earnMoney, spendMoney, saveMoney } from "/static/moneyFunctions.js";

class MainGameScene extends Phaser.Scene {
	constructor() {
		super({ key: 'MainGameScene' });
	}
	
	preload()
	{
		// Load images
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
	}

    create()
	{
		this.speed = 50;
		this.confirmationDialogOpened = false;
		this.collisionCooldown = false;
		// Set up users money
		this.money = 0;
		// Make tilemap
		this.map = this.make.tilemap({ key: 'city' })
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
		this.player = this.physics.add.sprite(400, 960, 'player', 'idle_down_1.png');
		this.player.setBodySize(10, 10);
		//Adding car sprite
		this.car = this.physics.add.sprite(400, 800, 'car');
		this.car.setScale(0.23);
		this.car.setBodySize(120, 260);
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

		//Adding car collision
		this.car.setCollideWorldBounds(true);
		this.physics.add.collider(this.car, borderLayer);
		this.physics.add.collider(this.car, objectsLayer);
		this.physics.add.collider(this.car, buildingLayer);
		this.physics.add.collider(this.car, treesLayer);
		this.car.body.setImmovable(true);
		this.physics.add.collider(this.car, this.player, interactWithCar, null, this);

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

		//Preparing character animations
		//Idle anims
		loadCharacterAnims(this);
	}

    update() 
	{
		//Offset money UI with camera positioning
		this.moneyText.x = this.cameras.main.scrollX + 10;
		this.moneyText.y = this.cameras.main.scrollY + 10;
		playerMovement(this);
    }
}

export default MainGameScene;
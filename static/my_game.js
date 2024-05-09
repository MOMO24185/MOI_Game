var config = {
	type: Phaser.AUTO,
    width: 1000,
    height: 1000,
	pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0, x: 0 },
			debug: false
        }
    },
	scene: { preload, create, update },
    scale: {
        parent: 'yourgamediv',
        mode: Phaser.Scale.FIT,
        width: 400,
        height: 250
    }
}

var game = new Phaser.Game(config)

function preload()
{
	// Load images
	this.load.image('buildings', 'static/assets/Tilesets/Buildings-Sheet.png');
	this.load.image('city', 'static/assets/Tilesets/Road-Sheet.png');
	this.load.image('FireStation', 'static/assets/Tilesets/FireStation.png');
	this.load.image('PoliceStation', 'static/assets/Tilesets/PoliceStation.png');
	this.load.image('Objects', 'static/assets/Tilesets/Tiles.png');
	this.load.image('Trees', 'static/assets/Tilesets/Tree-Sheet.png');
	// Load player sprite
	this.load.image('car', 'static/assets/Sprites/car.png');
	// Load tilemap
	this.load.tilemapTiledJSON('city', 'static/assets/Tilemaps/map.json');
	// Load character sprite sheet
	this.load.atlas('character', 'static/assets/Sprites/character/character.png', 'static/assets/Sprites/character/character.json');
}

function create()
{
	// Make tilemap
	this.map = this.make.tilemap({ key: 'city' })
	// add Tilesets to map
	const buildings = this.map.addTilesetImage('buildings', 'buildings')
	const city = this.map.addTilesetImage('city', 'city')
	const FireStation = this.map.addTilesetImage('FireStation', 'FireStation')
	const PoliceStation = this.map.addTilesetImage('PoliceStation', 'PoliceStation')
	const Objects = this.map.addTilesetImage('Objects', 'Objects')
	const Trees = this.map.addTilesetImage('Trees', 'Trees')

	// add Tilesets to map layers
	const cityTiles = [city, Objects, buildings, FireStation, PoliceStation, Trees];
	this.map.createLayer('background', cityTiles);
	this.map.createLayer('Floor', cityTiles);
	const borderLayer = this.map.createLayer('Border', cityTiles);
	const objectsLayer = this.map.createLayer('Objects', cityTiles);
	this.player = this.physics.add.image(200, 150, 'car');
	const buildingLayer = this.map.createLayer('Building', cityTiles);
	const treesLayer = this.map.createLayer('Trees', cityTiles);
	borderLayer.setCollisionByProperty({ collides: true });
	objectsLayer.setCollisionByProperty({ collides: true });
	buildingLayer.setCollisionByProperty({ collides: true });
	treesLayer.setCollisionByProperty({ collides: true });

	//Set camera and physics bounds
	this.cameras.main.setBounds(0, 0, 1400, 1150);
	this.physics.world.setBounds(0, 0, 1400, 1150);

	this.cursors = this.input.keyboard.createCursorKeys();


	this.player.setScale(0.2);

	this.player.setCollideWorldBounds(true);

	this.cameras.main.startFollow(this.player);

	this.cameras.main.followOffset.set(0, 0);
	
	//Setting up character sprite
	const character = this.add.sprite(128, 128, 'character', 'idle_down_1.png')

	//Preparing character animations
	this.anims.create({
		key: 'character-idle-down',
		frames: this.anims.generateFrameNames('character', {start: 1, end: 4, prefix: 'idle-down-', suffix: '.png'})
	})

	character.anims.play('character-idle-down')

	this.anims.create({
		key: 'character-idle-down',
		frames: this.anims.generateFrameNames('character', {start: 1, end: 4, prefix: 'idle-down-', suffix: '.png'})
	})

	this.anims.create({
		key: 'character-run-down',
		frames: this.anims.generateFrameNames('character', {start: 1, end: 8, prefix: 'run-down-', suffix: '.png'})
	})
		
}

function update()
{
	this.player.setVelocity(0);
	if (this.player) {
		if ((this.cursors.up.isDown && this.cursors.right.isDown) || (this.cursors.down.isDown && this.cursors.right.isDown)) {
		  this.player.setAngularVelocity(100)
		} else if ((this.cursors.down.isDown && this.cursors.left.isDown) || (this.cursors.up.isDown && this.cursors.left.isDown)) {
		  this.player.setAngularVelocity(-100)
		} else {
		  this.player.setAngularVelocity(0)
		}
	
		const velX = Math.cos((this.player.angle - 360) * 0.01745)
		const velY = Math.sin((this.player.angle - 360) * 0.01745)
		if (this.cursors.up.isDown) {
		  this.player.setVelocityX(200 * velX)
		  this.player.setVelocityY(200 * velY)
		} else if (this.cursors.down.isDown) {
		  this.player.setVelocityX(-100 * velX)
		  this.player.setVelocityY(-100 * velY)
		} else {
		  this.player.setAcceleration(0)
		}
	
		const currPosition = {
		  x: this.player.x,
		  y: this.player.y,
		  rotation: this.player.rotation
		}
		this.player.oldPosition = currPosition
	  }
}
var config = {
	type: Phaser.AUTO,
    width: 700,
    height: 400,
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
}

function create()
{
	// Make tilemap
	const map = this.make.tilemap({ key: 'city' })
	// add Tilesets to map
	const buildings = map.addTilesetImage('buildings', 'buildings')
	const city = map.addTilesetImage('city', 'city')
	const FireStation = map.addTilesetImage('FireStation', 'FireStation')
	const PoliceStation = map.addTilesetImage('PoliceStation', 'PoliceStation')
	const Objects = map.addTilesetImage('Objects', 'Objects')
	const Trees = map.addTilesetImage('Trees', 'Trees')

	// add Tilesets to map layers
	const cityTiles = [city, Objects, buildings, FireStation, PoliceStation, Trees]
	map.createLayer('Floor', cityTiles)
	map.createLayer('Border', cityTiles)
	map.createLayer('Objects', cityTiles)
	map.createLayer('Building', cityTiles)

	//Set camera and physics bounds
	this.cameras.main.setBounds(0, 0, 700, 1150);
	this.physics.world.setBounds(0, 0, 700, 1150);

	this.cursors = this.input.keyboard.createCursorKeys();

	this.player = this.physics.add.image(400, 300, 'car');

	this.player.setScale(0.2);

	this.player.setCollideWorldBounds(true);

	this.cameras.main.startFollow(this.player);

	this.cameras.main.followOffset.set(0, 0);

	map.createLayer('Trees', cityTiles)
}

function update()
{
	this.player.setVelocity(0);
	if (this.cursors.left.isDown)
	{
		this.player.setVelocityX(-200);
		this.player.setFlipX(true);
	}
	else if (this.cursors.right.isDown)
	{
		this.player.setVelocityX(200);
		this.player.setFlipX(false);
	}
	if (this.cursors.up.isDown)
	{
		this.player.setVelocityY(-200);
	}
	else if (this.cursors.down.isDown)
	{
		this.player.setVelocityY(200);
	}
}

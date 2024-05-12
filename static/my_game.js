var config = {
	type: Phaser.AUTO,
    width: 1000,
    height: 1000,
	pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0, x: 0 },
			debug: true
        }
    },
	scene: { preload, create, update },
    scale: {
        parent: 'yourgamediv',
        mode: Phaser.Scale.FIT,
        width: 500,
        height: 500
    }
}

var moneyText;
var speed = 50;
var game = new Phaser.Game(config);

// Money functions
function earnMoney(amount) {
	money += amount;
	moneyText.setText('Money: ' + money);
	saveMoney();
}

function spendMoney(amount) {
	if (money >= amount) {
		money -= amount;
		saveMoney();
		moneyText.setText('Money: ' + money);
		// Perform actions associated with spending money
	} else {
		console.log("Not enough money!");
	}
}

// Functions to save and load money using local storage
function saveMoney() {
	localStorage.setItem('money', money);
}

function loadMoney() {
	var savedMoney = localStorage.getItem('money');
	if (savedMoney !== null)
		money = parseInt(savedMoney);
	else if (savedMoney == null)
		money = 0;
	moneyText.setText('Money: ' + money);
}

function saveCar() {
	localStorage.setItem('carStatus', carStatus);
}

function loadCar() {
	var savedCar = localStorage.getItem('carStatus');
	if (savedCar !== null)
		carStatus = parseInt(savedMoney);
	else if (savedCar == null)
		savedCar = 0;
	moneyText.setText('Money: ' + money);
}

function preload()
{
	// Load images
	this.load.image('buildings', 'static/assets/Tilesets/Buildings-Sheet.png');
	this.load.image('city', 'static/assets/Tilesets/Road-Sheet.png');
	this.load.image('FireStation', 'static/assets/Tilesets/FireStation.png');
	this.load.image('PoliceStation', 'static/assets/Tilesets/PoliceStation.png');
	this.load.image('Objects', 'static/assets/Tilesets/Tiles.png');
	this.load.image('Trees', 'static/assets/Tilesets/Tree-Sheet.png');
	// Load car sprite
	this.load.image('car', 'static/assets/Sprites/car2.png');
	// Load tilemap
	this.load.tilemapTiledJSON('city', 'static/assets/Tilemaps/map.json');
	// Load player sprite sheet
	this.load.atlas('player', 'static/assets/Sprites/character/character.png', 'static/assets/Sprites/character/character.json');
}

function interactWithCar(player, car) {
    // Perform actions when collision occurs
}

function create()
{
	// Set up users money
	var money = 0;
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
	moneyText = this.add.text(10, 10, 'Money: ' + money, {
		fontSize: '24px',
		fill: '#000',
		wordWrap: { width: 200, useAdvancedWrap: true }
	});
	loadMoney();
	loadCar();

	//Preparing character animations
	//Idle anims
	this.player.anims.create({
		key: 'player-idle-down',
		frames: this.anims.generateFrameNames('player', {start: 1, end: 4, prefix: 'idle_down_', suffix: '.png'}),
		repeat: -1,
		frameRate: 10
	});

	this.player.anims.create({
		key: 'player-idle-up',
		frames: this.anims.generateFrameNames('player', {start: 1, end: 4, prefix: 'idle_up_', suffix: '.png'}),
		repeat: -1,
		frameRate: 10
	});

	this.player.anims.create({
		key: 'player-idle-left',
		frames: this.anims.generateFrameNames('player', {start: 1, end: 4, prefix: 'idle_left_', suffix: '.png'}),
		repeat: -1,
		frameRate: 10
	});

	this.player.anims.create({
		key: 'player-idle-right',
		frames: this.anims.generateFrameNames('player', {start: 1, end: 4, prefix: 'idle_right_', suffix: '.png'}),
		repeat: -1,
		frameRate: 10
	});

	//Running anims
	this.player.anims.create({
		key: 'player-run-down',
		frames: this.anims.generateFrameNames('player', {start: 1, end: 8, prefix: 'run_down_', suffix: '.png'}),
		repeat: -1,
		frameRate: 15
	});

	this.player.anims.create({
		key: 'player-run-up',
		frames: this.anims.generateFrameNames('player', {start: 1, end: 8, prefix: 'run_up_', suffix: '.png'}),
		repeat: -1,
		frameRate: 15
	});

	this.player.anims.create({
		key: 'player-run-left',
		frames: this.anims.generateFrameNames('player', {start: 1, end: 8, prefix: 'run_left_', suffix: '.png'}),
		repeat: -1,
		frameRate: 15
	});

	this.player.anims.create({
		key: 'player-run-right',
		frames: this.anims.generateFrameNames('player', {start: 1, end: 8, prefix: 'run_right_', suffix: '.png'}),
		repeat: -1,
		frameRate: 15
	});
}

function update()
{
	//Offset money UI with camera positioning
	moneyText.x = this.cameras.main.scrollX + 10;
    moneyText.y = this.cameras.main.scrollY + 10;
	//Prepare for player movement
	this.player.setVelocity(0);
	if (!this.player || !this.cursors)
			return;
	if (this.cursors.left.isDown)
	{
		this.player.anims.play('player-run-left', true);
		this.player.setVelocity(-speed, 0)
	}
	else if (this.cursors.right.isDown)
	{
		this.player.anims.play('player-run-right', true);
		this.player.setVelocity(speed, 0)
	}
	else if (this.cursors.up.isDown)
	{
		this.player.anims.play('player-run-up', true);
		this.player.setVelocity(0, -speed)
	}
	else if (this.cursors.down.isDown)
	{
		this.player.anims.play('player-run-down', true);
		this.player.setVelocity(0, speed)
	}
	else
	{
		this.player.anims.play('player-idle-down', true);
		this.player.setVelocity(0, 0)
	}
	//	Commented Code is for driving physics which is not availabe at the moment due to 
	//	driving option not being implemented to the main player sprite
	//	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	// if ((this.cursors.up.isDown && this.cursors.right.isDown) || (this.cursors.down.isDown && this.cursors.right.isDown)) {
	//   player.setAngularVelocity(100)
	// } else if ((this.cursors.down.isDown && this.cursors.left.isDown) || (this.cursors.up.isDown && this.cursors.left.isDown)) {
	//   player.setAngularVelocity(-100)
	// } else {
	//   player.setAngularVelocity(0)
	// }

	// const velX = Math.cos((player.angle - 360) * 0.01745)
	// const velY = Math.sin((player.angle - 360) * 0.01745)
	// if (this.cursors.up.isDown) {
	//   player.setVelocityX(200 * velX)
	//   player.setVelocityY(200 * velY)
	// } else if (this.cursors.down.isDown) {
	//   player.setVelocityX(-100 * velX)
	//   player.setVelocityY(-100 * velY)
	// } else {
	//   player.setAcceleration(0)
	// }

	// const currPosition = {
	//   x: player.x,
	//   y: player.y,
	//   rotation: player.rotation
	// }
	// player.oldPosition = currPosition
}

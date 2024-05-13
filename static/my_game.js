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

var	interacting = false;
var	interactionArea;
var	interactionButton;

speed = 300;

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
	// Load car sprite
	this.load.image('car', 'static/assets/Sprites/car.png');
	// Load tilemap
	this.load.tilemapTiledJSON('city', 'static/assets/Tilemaps/map.json');
	// Load player sprite sheet
	this.load.atlas('player', 'static/assets/Sprites/character/character.png', 'static/assets/Sprites/character/character.json');
	// Load welcome message
	this.load.atlas('welcomeMessage', 'static/assets/Tilesets/Text/welcome.png', 'static/assets/Tilesets/Text/welcome.json');

	// Define interaction areas
	interactionArea = this.add.rectangle(600, 310, 50, 50, 0xff0000); // 50x50 interaction area at police station entrance
	this.physics.add.existing(interactionArea, true); // Enable physics for collision detection
	
	// Define interaction button
	interactionButton = this.add.text(400, 400, 'Interact', { fontFamily: 'Arial', fontSize: '24px', fill: '#ffffff' });
	interactionButton.setInteractive();
	interactionButton.on('spacedown', interact, this); // Set up event listener for button press
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

	this.player = this.textures.get('player')
	this.welcomeMessage = this.textures.get('welcomeMessage')

	// add Tilesets to map layers
	const cityTiles = [city, Objects, buildings, FireStation, PoliceStation, Trees];
	this.map.createLayer('background', cityTiles);
	this.map.createLayer('Floor', cityTiles);
	const borderLayer = this.map.createLayer('Border', cityTiles);
	const objectsLayer = this.map.createLayer('Objects', cityTiles);
	this.player = this.physics.add.sprite(400, 960, 'player', 'idle_down_1.png');
	this.player.setBodySize(10, 10);
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

	this.player.setCollideWorldBounds(true);

	this.physics.add.collider(this.player, borderLayer);
	this.physics.add.collider(this.player, objectsLayer);
	this.physics.add.collider(this.player, buildingLayer);
	this.physics.add.collider(this.player, treesLayer);

	this.cameras.main.startFollow(this.player);

	this.cameras.main.followOffset.set(0, 0);

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
	this.welcomeMessage.x = this.player.x + 35;
	this.welcomeMessage.y = this.player.y - 40;
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
	// console.log("Interaction area = " + interactionArea.getBounds().x + " " + interactionArea.getBounds().y + " Player = " + this.player.x + " " + this.player.y);
	// if (interacting === false && Phaser.Geom.Rectangle.ContainsPoint(interactionArea.getBounds(), this.player.x, this.player.y)) {
		// if (interacting === false && player.x >= interactionArea.x && player.x <= interactionArea.x + 50 && player.y >= interactionArea.y && player.y <= interactionArea.y + 50) {
    //     // If player is inside interaction area and not currently interacting, show button
    //     interactionButton.visible = true;
	// 	console.log("I am here!");
	// 	// this.spacebar.on('down', interact, this);
    // } else {
	// 	// Otherwise, hide button
    //     interactionButton.visible = false;
    // }
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

function	interact()
{
	console.log("Interacting");
	// console.log("Interaction area = " + interactionArea.getBounds().x + " " + interactionArea.getBounds().y + " Player = " + this.player.x + " " + this.player.y);

	// Check for interaction with police station
	if (interacting === false && this.player.x >= interactionArea.getBounds().x && this.player.x <= interactionArea.getBounds().x + 50 && this.player.y >= interactionArea.getBounds().y && this.player.y <= interactionArea.getBounds().y + 50) {
		// If player is inside interaction area and not currently interacting, show button
		interactionButton.visible = true;
		policeStationInteract(this);
	} else {
		// Otherwise, hide button and do nothing
		interactionButton.visible = false;
		console.log("Not interacting with police station!");
	}
}

function	policeStationInteract()
{
	console.log("Interacting with police station!");
	// Put interaction with police station code here
}
import Phaser from 'phaser'


export default class Preloader extends Phaser.Scene
{
    constructor()
	{
        super('preloader');
    }

    preload()
	{
        // Set the base path for asset loading
        this.load.path = 'assets/';

        // Load images
        this.load.image('buildings', 'Buildings-Sheet.png');
        this.load.image('city', 'Road-Sheet.png');
        this.load.image('FireStation', 'FireStation.png');
        this.load.image('PoliceStation', 'PoliceStation.png');
        this.load.image('Objects', 'Tiles.png');
        this.load.image('Trees', 'Tree-Sheet.png');

        // Load tilemap
        this.load.tilemapTiledJSON('city', 'map.json');
    }

    create()
	{
        // Start the 'game' scene after preloading is complete
        this.scene.start('game');
    }
}
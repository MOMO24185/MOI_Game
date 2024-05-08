import Phaser from 'phaser'

export default class Game extends Phaser.Scene
{
	constructor()
	{
		super('game')
	}

	preload()
	{
	}

	create()
	{
		const map = this.make.tilemap({ key: 'city' })
		const buildings = map.addTilesetImage('buildings', 'buildings')
		const city = map.addTilesetImage('city', 'city')
		const FireStation = map.addTilesetImage('FireStation', 'FireStation')
		const PoliceStation = map.addTilesetImage('PoliceStation', 'PoliceStation')
		const Objects = map.addTilesetImage('Objects', 'Objects')
		const Trees = map.addTilesetImage('Trees', 'Trees')

		map.createLayer('Floor', Objects)
		map.createLayer('Border', Objects)
		map.createLayer('Objects', city)
		map.createLayer('Trees', Trees)
		map.createLayer('Building', FireStation)
		map.createLayer('Building', PoliceStation)
		map.createLayer('Building', buildings)
	}
}
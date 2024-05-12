export function loadCharacterAnims(scene)
{
	scene.player.anims.create({
		key: 'player-idle-down',
		frames: scene.anims.generateFrameNames('player', {start: 1, end: 4, prefix: 'idle_down_', suffix: '.png'}),
		repeat: -1,
		frameRate: 10
	});

	scene.player.anims.create({
		key: 'player-idle-up',
		frames: scene.anims.generateFrameNames('player', {start: 1, end: 4, prefix: 'idle_up_', suffix: '.png'}),
		repeat: -1,
		frameRate: 10
	});

	scene.player.anims.create({
		key: 'player-idle-left',
		frames: scene.anims.generateFrameNames('player', {start: 1, end: 4, prefix: 'idle_left_', suffix: '.png'}),
		repeat: -1,
		frameRate: 10
	});

	scene.player.anims.create({
		key: 'player-idle-right',
		frames: scene.anims.generateFrameNames('player', {start: 1, end: 4, prefix: 'idle_right_', suffix: '.png'}),
		repeat: -1,
		frameRate: 10
	});

	//Running anims
	scene.player.anims.create({
		key: 'player-run-down',
		frames: scene.anims.generateFrameNames('player', {start: 1, end: 8, prefix: 'run_down_', suffix: '.png'}),
		repeat: -1,
		frameRate: 15
	});

	scene.player.anims.create({
		key: 'player-run-up',
		frames: scene.anims.generateFrameNames('player', {start: 1, end: 8, prefix: 'run_up_', suffix: '.png'}),
		repeat: -1,
		frameRate: 15
	});

	scene.player.anims.create({
		key: 'player-run-left',
		frames: scene.anims.generateFrameNames('player', {start: 1, end: 8, prefix: 'run_left_', suffix: '.png'}),
		repeat: -1,
		frameRate: 15
	});

	scene.player.anims.create({
		key: 'player-run-right',
		frames: scene.anims.generateFrameNames('player', {start: 1, end: 8, prefix: 'run_right_', suffix: '.png'}),
		repeat: -1,
		frameRate: 15
	});
}

export function playerMovement(scene)
{
	//Prepare for player movement
	scene.player.setVelocity(0);
	if (!scene.player || !scene.cursors)
			return;
	if (scene.cursors.left.isDown)
	{
		scene.player.anims.play('player-run-left', true);
		scene.player.setVelocity(-scene.speed, 0)
	}
	else if (scene.cursors.right.isDown)
	{
		scene.player.anims.play('player-run-right', true);
		scene.player.setVelocity(scene.speed, 0)
	}
	else if (scene.cursors.up.isDown)
	{
		scene.player.anims.play('player-run-up', true);
		scene.player.setVelocity(0, -scene.speed)
	}
	else if (scene.cursors.down.isDown)
	{
		scene.player.anims.play('player-run-down', true);
		scene.player.setVelocity(0, scene.speed)
	}
	else
	{
		scene.player.anims.play('player-idle-down', true);
		scene.player.setVelocity(0, 0)
	}
}
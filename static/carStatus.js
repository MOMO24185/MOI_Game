let carStatus;

export function saveCar() {
	localStorage.setItem('carStatus', carStatus);
}

export function loadCar(scene) {
	var savedCar = localStorage.getItem('carStatus');
	if (savedCar !== null)
		scene.carStatus = parseInt(savedMoney);
	else if (savedCar == null)
		savedCar = 0;
	scene.moneyText.setText('Money: ' + scene.money);
}

export function interactWithCar(scene, player, car) {
    // Perform actions when collision occurs
}

export function carMovement(scene)
{
	if ((scene.cursors.up.isDown && scene.cursors.right.isDown) || (scene.cursors.down.isDown && scene.cursors.right.isDown)) {
		scene.player.setAngularVelocity(100)
	} else if ((scene.cursors.down.isDown && scene.cursors.left.isDown) || (scene.cursors.up.isDown && scene.cursors.left.isDown)) {
		scene.player.setAngularVelocity(-100)
	} else {
		scene.player.setAngularVelocity(0)
	}
  
	const velX = Math.cos((player.angle - 360) * 0.01745)
	const velY = Math.sin((player.angle - 360) * 0.01745)
	if (scene.cursors.up.isDown) {
		scene.player.setVelocityX(200 * velX)
		scene.player.setVelocityY(200 * velY)
	} else if (scene.cursors.down.isDown) {
		scene.player.setVelocityX(-100 * velX)
		scene.player.setVelocityY(-100 * velY)
	} else {
		scene.player.setAcceleration(0)
	}
  
	const currPosition = {
		x: scene.player.x,
		y: scene.player.y,
		rotation: scene.player.rotation
	}
	scene.player.oldPosition = currPosition
}
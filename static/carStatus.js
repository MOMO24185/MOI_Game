import { loadMoney, earnMoney, spendMoney, saveMoney } from "/static/moneyFunctions.js";
import { enterCarDialog, buyCarDialog, startCollisionCooldown } from "/static/dialogs.js";

export function handleBuyCar(scene){
	if (spendMoney(scene, 2000))
	{
		scene.carStatus = true;
		saveCar();
		console.log('Bought car');
	}
}

export function handleEnterCar(){
	
}

export function saveCar(scene) {
	localStorage.setItem('carStatus', scene.carStatus);
}

export function loadCar(scene) {
	var savedCar = localStorage.getItem('carStatus');
	console.log(scene.carStatus);
	if (savedCar !== null)
	{
		savedCar = parseInt(savedCar);
		if (savedCar == 1)
			scene.carStatus = 1;
		else
			scene.carStatus = 0;
	}
	else
		scene.carStatus = 0;
	saveCar(scene);
}

export function interactWithCar(scene) {// Check if the player owns the car
    console.log('Player collided with the car');
	loadCar(scene);
    if (scene.carStatus == 1 && !scene.confirmationDialogOpened && !scene.collisionCooldown) {
		startCollisionCooldown(scene);
		scene.confirmationDialogOpened = true;
        console.log('Player owns the car.');
      	// Display a popup with options to enter the car
        // For example:
        if (confirm('Do you want to enter the car?')) {
            // Player wants to enter the car, implement logic to enter the car
            console.log('Player wants to enter the car. Implementing enter car logic...');
            // Implement logic to deduct money and set carStatus to true
        } else {
            // Player does not want to enter the car
            console.log('Player does not want to enter the car.');
		}
    } else if (!scene.confirmationDialogOpened && !scene.collisionCooldown) {
		scene.confirmationDialogOpened = true; 
        // Player does not own the car, prompt to buy the car
        console.log('Player does not own the car.');
        // Display a popup with options to buy the car
        // For example:
        if (confirm('Do you want to buy the car?')) {
            // Player wants to buy the car, implement logic to buy the car
            console.log('Player wants to buy the car. Implementing buy car logic...');
            // Implement logic to deduct money and set carStatus to true
        } else {
            // Player does not want to buy the car
            console.log('Player does not want to buy the car.');
        }
    }
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
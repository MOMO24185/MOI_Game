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

export function handleEnterCar(scene)
{
	// Set player to invisible when he enters the car
	scene.player.setVisible(false);
	
	// Set insideCar to true
	scene.player.insideCar = true;

	// Stop car movement
	scene.car.setVelocityX(0);
	scene.car.setVelocityY(0);
	scene.car.setAcceleration(0);
	scene.car.setAngularVelocity(0);
	
	// Make camera follow the car
	scene.cameras.main.startFollow(scene.car);
	scene.cameras.main.followOffset.set(0, 0);

	console.log("handleEnterCar");
}

export function handleExitCar(scene)
{
	// Set player position to the car position
	scene.player.x = scene.car.x;
	scene.player.y = scene.car.y;

	// Set player to visible when he exits the car
	scene.player.setVisible(true);

	// Set insideCar to false
	scene.player.insideCar = false;

	// Make camera follow the player
	scene.cameras.main.startFollow(scene.player);
	scene.cameras.main.followOffset.set(0, 0);
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
			handleEnterCar(scene);
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
			handleBuyCar(this);
			// Testing handleEnterCar
			handleEnterCar(this);

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
		scene.car.setAngularVelocity(100)
	} else if ((scene.cursors.down.isDown && scene.cursors.left.isDown) || (scene.cursors.up.isDown && scene.cursors.left.isDown)) {
		scene.car.setAngularVelocity(-100)
	} else {
		scene.car.setAngularVelocity(0)
	}
  
	const velX = Math.cos(scene.car.angle - 360 * 0.01745)
	const velY = Math.sin(scene.car.angle - 360 * 0.01745)
	if (scene.cursors.up.isDown) {
		scene.car.setVelocityX(200 * velX)
		scene.car.setVelocityY(200 * velY)
	} else if (scene.cursors.down.isDown) {
		scene.car.setVelocityX(-100 * velX)
		scene.car.setVelocityY(-100 * velY)
	} else {
		scene.car.setAcceleration(0)
	}
  
	const currPosition = {
		x: scene.car.x,
		y: scene.car.y,
		rotation: scene.car.rotation
	}
	scene.car.oldPosition = currPosition
}
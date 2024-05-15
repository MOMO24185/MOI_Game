import { loadMoney, earnMoney, spendMoney, saveMoney } from "/static/moneyFunctions.js";
import buyCarPopUpScene from "/static/buyCarPopUp.js";
import enterCarPopUpScene from "/static/enterCarPopUp.js";

function startCollisionCooldown(scene) {
    scene.collisionCooldown = true;
    setTimeout(() => {
        scene.collisionCooldown = false; // Reset collision cooldown after a certain period
    }, 1000); // Adjust the cooldown period as needed (in milliseconds)
}

export function handleBuyCar(scene){
	if (spendMoney(scene, 2000))
	{
		scene.carStatus = true;
		saveCar();
		console.log('Bought car');
	}
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

export function handleEnterCar(scene){
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
		const dataToSend = {
			
		}
		this.scene.launch('enterCarPopUpScene');
    } else if (!scene.confirmationDialogOpened && !scene.collisionCooldown) {
		scene.confirmationDialogOpened = true; 
        // Player does not own the car, prompt to buy the car
        console.log('Player does not own the car.');
		this.scene.launch('buyCarPopUpScene');
    }
	scene.confirmationDialogOpened = false; 
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
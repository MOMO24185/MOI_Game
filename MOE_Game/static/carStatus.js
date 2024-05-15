import { loadMoney, earnMoney, spendMoney, saveMoney } from "/static/moneyFunctions.js";
import buyCarPopUpScene from "/static/buyCarPopUp.js";
import enterCarPopUpScene from "/static/enterCarPopUp.js";

export function startCollisionCooldown(scene, amount) {
    scene.collisionCooldown = true;
    setTimeout(() => {
        scene.collisionCooldown = false; // Reset collision cooldown after a certain period
    }, amount); // Adjust the cooldown period as needed (in milliseconds)
}

export function setInsideCar(InsideCar, value) {
	InsideCar = value;
	saveInsideCar(InsideCar);
}

export function saveInsideCar(InsideCar) {
	localStorage.setItem('InsideCar', InsideCar);
}

export function loadInsideCar() {
	var savedInsideCar = localStorage.getItem('InsideCar');
	if (savedInsideCar !== null)
		savedInsideCar = parseInt(savedInsideCar);
	else
		savedInsideCar = 0;
		saveInsideCar(savedInsideCar);
	return savedInsideCar;
}

export function handleExitCar(scene)
{
    scene.collisionCooldown = true;
	// Set player position to the car position
	scene.player.x = scene.car.x;
	scene.player.y = scene.car.y + 20;

	// Set player to visible when he exits the car
	scene.player.setVisible(true);

	// Make camera follow the player
	scene.cameras.main.startFollow(scene.player);
	scene.cameras.main.followOffset.set(0, 0);
	setInsideCar(scene.player.InsideCar, 0);
	startCollisionCooldown(scene, 5000);
}

export function handleEnterCar(scene){
	// Set player to invisible when he enters the car
	scene.player.setPosition(-1000, -1000);

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

export function saveCar(carStatus) {
	localStorage.setItem('carStatus', carStatus);
}

export function loadCar(scene) {
	var savedCar = localStorage.getItem('carStatus');
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
	saveCar(scene.carStatus);
}

export function interactWithCar(scene) {// Check if the player owns the car
	loadCar(scene);
    if (scene.carStatus == 1 && !scene.confirmationDialogOpened && !scene.collisionCooldown) {
		startCollisionCooldown(scene, 1000);
		scene.confirmationDialogOpened = true;
        console.log('Player owns the car.');
      	// Display a popup with options to enter the car
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
	var rotationInDegrees = 0;
	var rotationInRadians = 0;
	scene.car.setVelocity(0);
	if (!scene.car || !scene.cursors)
			return;
	if (scene.cursors.left.isDown)
	{
		rotationInDegrees = 90;
		rotationInRadians = Phaser.Math.DegToRad(rotationInDegrees);
		scene.car.setRotation(rotationInRadians);
		scene.car.setBodySize(260, 120);
		scene.car.setVelocity(-100, 0)
	}
	else if (scene.cursors.right.isDown)
	{
		rotationInDegrees = -90;
		rotationInRadians = Phaser.Math.DegToRad(rotationInDegrees);
		scene.car.setRotation(rotationInRadians);
		scene.car.setBodySize(260, 120);
		scene.car.setVelocity(100, 0)
	}
	else if (scene.cursors.up.isDown)
	{
		rotationInDegrees = 180;
		rotationInRadians = Phaser.Math.DegToRad(rotationInDegrees);
		scene.car.setRotation(rotationInRadians);
		scene.car.setBodySize(120, 260);
		scene.car.setVelocity(0, -100)
	}
	else if (scene.cursors.down.isDown)
	{
		rotationInDegrees = 360;
		rotationInRadians = Phaser.Math.DegToRad(rotationInDegrees);
		scene.car.setRotation(rotationInRadians);
		scene.car.setBodySize(120, 260);
		scene.car.setVelocity(0, 100)
	}
	else
	{
		scene.car.setVelocity(0, 0)
	}
}
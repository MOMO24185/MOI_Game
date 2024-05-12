import { loadMoney, earnMoney, spendMoney, saveMoney } from "/static/moneyFunctions.js";
import { enterCarDialog, buyCarDialog } from "/static/dialogs.js";

let carStatus;

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

export function saveCar() {
	localStorage.setItem('carStatus', carStatus);
}

export function loadCar(scene) {
	var savedCar = localStorage.getItem('carStatus');
	if (savedCar !== null)
	{
		if (savedCar == true)
			scene.carStatus = true;
	}
	else
		savedCar = false;
	saveCar();
	scene.moneyText.setText('Money: ' + scene.money);
}

export function interactWithCar(scene) {// Check if the player owns the car
    console.log('Player collided with the car');
    if (scene.carStatus) {
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
    } else {
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
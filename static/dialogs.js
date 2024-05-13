import { loadMoney, earnMoney, spendMoney, saveMoney } from "/static/moneyFunctions.js";
import { interactWithCar, loadCar, saveCar, carMovement, handleBuyCar, handleEnterCar } from "/static/carStatus.js";
import PopUpScene from "/static/pop_up.js";

function closeDialog() {
    // Remove the dialog from the scene
    // For example:
    dialog.destroy();
    message.destroy();
    yesButton.destroy();
    noButton.destroy();
}

export function startCollisionCooldown(scene) {
    scene.collisionCooldown = true;
    setTimeout(() => {
        scene.collisionCooldown = false; // Reset collision cooldown after a certain period
    }, 1000); // Adjust the cooldown period as needed (in milliseconds)
}

export function enterCarDialog(scene) {
    // Create a modal or dialog with Phaser's graphics/text features
    const dialog = scene.add.graphics();
    dialog.fillStyle(0xffffff, 1);
    dialog.fillRect(/* position and size of the dialog */);

    const message = scene.add.text(scene.cameras.main.scrollX + 200, scene.cameras.main.scrollY + 200, 'Do you want to enter the car?', {
        fontSize: '24px',
        fill: '#000000'
    });

    const yesButton = scene.add.text(scene.cameras.main.scrollX + 250, scene.cameras.main.scrollY + 250, 'Yes', {
        fontSize: '24px',
        fill: '#000000'
    }).setInteractive();
    yesButton.on('pointerdown', handleEnterCar(scene));

    const noButton = scene.add.text(scene.cameras.main.scrollX + 150, scene.cameras.main.scrollY + 250, 'No', {
        fontSize: '24px',
        fill: '#000000'
    }).setInteractive();
    noButton.on('pointerdown', closeDialog);
}

export function buyCarDialog(scene) {
	//Preparing asset positioning
	scene.dialogBox = scene.setPosition(scene.camX + 200, scene.camY + 200);
	scene.button = scene.setPosition(scene.camX + 250, scene.camY + 250);
	scene.buttonPress = scene.setPosition(scene.camX + 150, scene.camY + 250);
    scene.dialogBox.setOrigin(0.5);

    // Create message text
    const message = scene.add.text(scene.camX + 200, scene.camY + 150, 'Do you want to buy the car?', {
        fontSize: '24px',
        fill: '#000000'
    });
    message.setOrigin(0.5);
    
    // Create Yes button
    scene.button.setOrigin(0.5);
    scene.button.setInteractive();
    scene.button.on('pointerdown', () => handleBuyCar(scene));

    // Create No button
    scene.buttonPress.setOrigin(0.5);
    scene.buttonPress.setInteractive();
    scene.buttonPress.on('pointerdown', closeDialog);
}
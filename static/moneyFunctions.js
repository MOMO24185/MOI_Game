export function earnMoney(scene, amount) {
    scene.money += amount;
    scene.moneyText.setText('Money: ' + scene.money);
    saveMoney();
}

export function spendMoney(scene, amount) {
	if (scene.money >= amount) {
		scene.money -= amount;
		saveMoney();
		scene.moneyText.setText('Money: ' + scene.money);
		// Perform actions associated with spending money
	} else {
		console.log("Not enough money!");
	}
}

export function saveMoney() {
	localStorage.setItem('money', money);
}

export function loadMoney(scene) {
	var savedMoney = localStorage.getItem('money');
	if (savedMoney !== null)
		scene.money = parseInt(savedMoney);
	else if (savedMoney == null)
		scene.money = 0;
	scene.moneyText.setText('Money: ' + scene.money);
}
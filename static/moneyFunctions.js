export function earnMoney(scene, amount) {
    scene.money += amount;
    scene.moneyText.setText('Money: ' + scene.money);
    saveMoney(scene.money);
}

export function spendMoney(amount) {
	var money = loadMoney();
	if (money >= amount) {
		money -= amount;
		saveMoney(money);
		return true;
	} else {
		console.log("Not enough money!");
		return false;
	}
}

export function saveMoney(money) {
	localStorage.setItem('money', money);
}

export function loadMoney() {
	var money = 0;
	var savedMoney = localStorage.getItem('money');
	if (savedMoney !== null)
		money = parseInt(savedMoney);
	//Temporary since we dont have a functioning "work" tilemap
	if (money < 2000)
		money = 10000;
	return money;
}
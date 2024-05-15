import { loadMoney, earnMoney, spendMoney, saveMoney } from "/static/moneyFunctions.js";

export function addFine(scene, amount) {
    scene.fine += amount;
    saveFine(scene.fine);
}

export function payFine(scene) {
	if (spendMoney(scene, scene.fine)) {
		scene.fine = 0;
		saveFine(scene.fine);
		// Perform actions associated with spending money
		console.log("fines Paid!");
		return true;
	} else {
		console.log("Not enough money!");
		return false;
	}
}

export function saveFine(fine) {
	localStorage.setItem('fine', fine);
}

export function loadFine(scene) {
	var savedFine = localStorage.getItem('fine');
	if (savedFine !== null)
		scene.fine = parseInt(savedFine);
	else
		scene.fine = 0;
	saveFine(scene.fine);
}
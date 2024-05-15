import { loadMoney, earnMoney, spendMoney, saveMoney } from "/static/moneyFunctions.js";

export function addFine(amount) {
	var fine = loadFine();
	fine += amount;
    saveFine(fine);
}

export function payFine() {
	if (spendMoney(loadFine())) {
		var fine = 0;
		saveFine(fine);
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

export function loadFine() {
	var fine;
	var savedFine = localStorage.getItem('fine');
	if (savedFine !== null)
		fine = parseInt(savedFine);
	else
		return 0;
	return fine;
}
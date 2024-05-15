export function addRegistration() {
	console.log('inside add regist');
    saveRegistration(1);
	console.log('done add regist');
}

export function saveRegistration(registration) {
	localStorage.setItem('registration', registration);
	console.log('finished storing regist');
}

export function loadRegistration() {
	var registration;
	var savedRegistration = localStorage.getItem('registration');
	if (savedRegistration !== null)
		registration = parseInt(savedRegistration);
	else
		return 0;
	return registration;
}
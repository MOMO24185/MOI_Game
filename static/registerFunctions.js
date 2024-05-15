export function addRegistration(scene) {
    scene.registration = 1;
    saveRegistration(scene.registration);
}

export function saveRegistration(registration) {
	localStorage.setItem('registration', registration);
}

export function loadRegistration(scene) {
	var savedRegistration = localStorage.getItem('registration');
	if (savedRegistration !== null)
		scene.registration = parseInt(savedRegistration);
	else
		scene.registration = 0;
	saveRegistration(scene.registration);
}
export function addLicense(scene) {
    scene.license = 1;
    saveLicense(scene.license);
}

export function saveLicense(license) {
	localStorage.setItem('license', license);
}

export function loadLicense(scene) {
	var savedLicense = localStorage.getItem('license');
	if (savedLicense !== null)
		scene.license = parseInt(savedLicense);
	else
		scene.license = 0;
	saveLicense(scene.license);
}
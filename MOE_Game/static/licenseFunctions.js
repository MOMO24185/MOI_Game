export function addLicense() {
    saveLicense(1);
}

export function saveLicense(license) {
	localStorage.setItem('license', license);
}

export function loadLicense() {
	var license;
	var savedLicense = localStorage.getItem('license');
	if (savedLicense !== null)
		license = parseInt(savedLicense);
	else
		license = 0;
	return license;
}
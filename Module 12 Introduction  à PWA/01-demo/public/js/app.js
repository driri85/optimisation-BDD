// on vérifie si le service est supporté ... //
if ("serviceWorker" in navigator) {
	console.log("Les services workers sont supportés ici !");

	// ... puis on l'enregistre dans l'application //
	try {
		const registration = await navigator.serviceWorker.register("/sw.js");
		console.log("Le service worker est enregistré !", registration);
	} catch (error) {
		console.log("Une erreur à eut lieu !", error.message);
	}
}
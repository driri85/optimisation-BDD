// INITIALISATION DU SERVICE //

// au chargement de la page, on écoute le click sur les boutons pour activer la fonctionnalité demandée //
window.addEventListener("load", initGeolocalisation);

function initGeolocalisation() {
	// on vérifie si le service est disponible depuis le navigateur de l'utilisateur //
	if ("geolocation" in navigator) {
		console.log('La fonctionnalité "géolocalisation" est disponible !');
	} else {
		return console.log(
			'La fonctionnalité "géolocalisation" n\'est pas disponible !'
		);
	}

	// géolocalisation instantannée - bouton //
	document.querySelector("#geoInstantButton").addEventListener("click", getGeo);

	// géolacalisation en direct - bouton //
	document
		.querySelector("#geoWatcherButton")
		.addEventListener("click", watchGeo);
}

// PARAMETRES ET CALLBACK  //

// les options pour paramétrer les méthodes de géolocalisation //
const options = {
	// un booléen qui indique si une précision élevée est requise //
	enableHighAccuracy: false,
	// un entier qui exprime la durée, en millisecondes, avant que la fonction de rappel error soit appelé. Si cette propriété vaut 0, la fonction d'erreur ne sera jamais appelée //
	timeout: 15000,
	// un entier qui exprime une durée en millisecondes ou l'infini pour indiquer la durée maximale pendant laquelle mettre en cache la position //
	maximumAge: 0,
};

// callback en cas de réussite de géolocalisation //
function getGeoResolve(position) {
	console.log("Position actuelle : ", position);
	displayPosition(position);
}

// callback en cas d'échec de géolocalisation //
function getGeoReject(error) {
	console.log(
		"Une erreur est survenue lors de la récupération de la position : ",
		error.message
	);

	// voici les codes erreur possibles //
	switch (error.code) {
		case "0":
			console.log("Erreur d'origine inconnue !");
			break;
		case "1":
			console.log("L'utilisateur n'a pas accepté l'utilisation du service !");
			break;
		case "2":
			console.log("La géolocalisation de l'appareil n'est pas disponible !");
			break;
		case "3":
			console.log("Timeout trop court !");
			break;
	}
}

// GEOLOCALISATION INSTANTANEE //

function getGeo() {
	// .getCurrentPosition peut recevoir 3 arguments, seul le 1ier est obligatoire //
	navigator.geolocation.getCurrentPosition(
		// callback si la géolocalisation a réussit, reçoit la position //
		getGeoResolve,
		// callBack si la géolocalisation a échouée, reçoit une erreur //
		getGeoReject,
		// options, cf plus haut //
		options
	);
}

// GEOLOCALISATION EN DIRECT //

// initialisation de l'état de l'écouteur d'évenement //
let geoWatcher = null;

// on active ou désactive le watcher selon la situation actuelle //
function watchGeo() {
	if (geoWatcher) {
		setButtonOn();
		removeGeoWatcher();
	} else {
		setButtonOff();
		setupGeoWatcher();
	}
}

// activation du service //
function setupGeoWatcher() {
	// .watchPosition peut recevoir 3 arguments, seul le 1ier est obligatoire //
	// on place l'écouteur d'évenement dans la variable initialisée plus tôt pour pouvoir désactiver le service si besoin //
	geoWatcher = navigator.geolocation.watchPosition(
		// callback si la géolocalisation a réussit, reçoit la position //
		getGeoResolve,
		// callBacksi la géolocalisation a échouée, reçoit une erreur //
		getGeoReject,
		// options, cf plus haut //
		options
	);
}

// arret du service //
function removeGeoWatcher() {
	// .clearWatch() permet de stoper l'écouteur d'évenement, ilprend en argument ce dernier //
	navigator.geolocation.clearWatch(geoWatcher);
	// on réinitialise l'état de l'écouteur d'évenement //
	geoWatcher = undefined;
	console.log("La détéction des changements de position est désactivée !");
}

// modification de l'affichage du bouton //
function setButtonOn() {
	document.querySelector("#geoWatcherButton").innerHTML = "Activer en direct";
}

function setButtonOff() {
	document.querySelector("#geoWatcherButton").innerHTML = "Désctiver en direct";
}

// AFFICHAGE DE LA POSITION //

function displayPosition(position) {
	document.querySelector("#geo-timestamp").innerHTML = `${position.timestamp}`;
	document.querySelector(
		"#geo-accuracy"
	).innerHTML = `${position.coords.accuracy}`;
	document.querySelector(
		"#geo-altitude"
	).innerHTML = `${position.coords.altitude}`;
	document.querySelector(
		"#geo-altitudeAccuracy"
	).innerHTML = `${position.coords.altitudeAccuracy}`;
	document.querySelector(
		"#geo-heading"
	).innerHTML = `${position.coords.heading}`;
	document.querySelector(
		"#geo-latitude"
	).innerHTML = `${position.coords.latitude}`;
	document.querySelector(
		"#geo-longitude"
	).innerHTML = `${position.coords.longitude}`;
	document.querySelector("#geo-speed").innerHTML = `${position.coords.speed}`;
}

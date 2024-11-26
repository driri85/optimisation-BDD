# API Géolocalisation

## Description

L'API Geolocation de l'objet Navigator en JavaScript permet aux applications web d'obtenir la localisation géographique d'un utilisateur à partir de son appareil.

Cette API est simple d'utilisation et fournit des fonctionnalités pour récupérer les coordonnées géographiques de l'appareil de l'utilisateur par le biais du GPS intégré, des signaux Wi-Fi, ou de l'adresse IP par exemple.

## Autorisation

Lorsque vous ferez appel aux méthodes de l'API Geolocation depuis votre application et selon les réglages mis en place par l'utilisateur, un pop-up apparaitra depuis le navigateur de l'utilisateur pour qu'il vous autorise ou vous refuse à accéder à ces données. Il convient donc de s'assurer que l'application prend bien en compte les cas où l'utilisateur refuse l'accès à la géolocalisation de l'appareil.

La mise en forme du message d'autorisation est à la charge du navigateur et dépend de ce dernier.

## Obteninr la position actuelle

On souhaite obtenir la localisation de l'utilisateur et l'afficher dans la console lorsque ce dernier actionnera le bouton dédié à cette fonction.

<code>index.html</code> _mise en place du bouton et du script_

```html
<div class="geo--buttons">
	<button id="geoInstantButton">Instannée</button>
	<!-- <button id="geoWatcherButton">Activer la géolocalisation en direct</button> -->
</div>

<script type="module" src="src/scripts/geo.js"></script>
```

<code>src/geo.js</code> _vérification de la prise en charge de la fonctionnalité géolocalisation puis mise en place de l'écouteur d'évenement sur le bouton_

```js
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
}
```

<code>src/geo.js</code> _la méthode .getCurrentPosition()_

```js
// les options pour paramétrer les méthodes de géolocalisation //
const options = {
	// un booléen qui indique si une précision élevée est requise //
	enableHighAccuracy: false,
	// un entier qui exprime la durée, en millisecondes, avant que la fonction de rappel error soit appelé. Si cette propriété vaut 0, la fonction d'erreur ne sera jamais appelée //
	timeout: 15000,
	// un entier qui exprime une durée en millisecondes ou l'infini pour indiquer la durée maximale pendant laquelle mettre en cache la position //
	maximumAge: 0,
};

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
```

<code>src/geo.js</code> _en cas de succès_

```js
// callback en cas de réussite de géolocalisation //
function getGeoResolve(position) {
	console.log("Position actuelle : ", position);
}
```

<code>src/geo.js</code> _en cas de d'échec_

```js
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
```

En cas de réussite, l'objet <code>position</code> reçu dans la callback est construit de cette manière :

![L'objet gelocationPosition](/public/images/gelocationPosition_object%202024-03-18%20143209.png)

## Mettre à jour la position en direct

Nous avons la possibilité d'écouter les changements de positions de l'utilisateur et d'y réagir à chaque occurence en déclenchant une fonction en réponse.

Nous utiliserons un 2ieme bouton pour soit mettre en route la fonctionnalité, soit y mettre fin.

<code>index.html</code> _mise en place du 2ieme bouton_

```html
<div class="geo--buttons">
	<button id="geoInstantButton">Instannée</button>
	<button id="geoWatcherButton">Activer la géolocalisation en direct</button>
</div>

<script type="module" src="src/scripts/geo.js"></script>
```

<code>src/geo.js</code> _mise en place de l'écouteur d'évenement sur le bouton_

```js
function initGeolocalisation() {
	// ... //

	// géolacalisation en direct - bouton //
	document
		.querySelector("#geoWatcherButton")
		.addEventListener("click", watchGeo);
}
```

Les objets <code>options</code> et fonctions <code>getGeoResolve()</code> et <code>getGeoReject()</code> sont les même que dans le chapitre précédent.

On utilise la variable <code>geoWatcher</code> pour stoquer l'écouteur d'évenement qui nous permettra de suivre les déplacement de l'utilisateur. Cette variable nous permet de vérifier s'il est déjà en route ou non et agir en concéquence, et aussi de le désactiver lorsque nécessaire.

<code>src/geo.js</code> _initialisation de <code>geoWatcher</code> et choix entre activer ou désactiver le service_

```js
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
```

<code>src/geo.js</code> _on active le service_

```js
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
```

<code>src/geo.js</code> _on desactive le service_

```js
// arret du service //
function removeGeoWatcher() {
	// .clearWatch() permet de stoper l'écouteur d'évenement, ilprend en argument ce dernier //
	navigator.geolocation.clearWatch(geoWatcher);
	// on réinitialise l'état de l'écouteur d'évenement //
	geoWatcher = undefined;
	console.log("La détéction des changements de position est désactivée !");
}
```

<code>src/geo.js</code> _on modifie l'affichage du bouton selon la situation_

```js
// modification de l'affichage du bouton //
function setButtonOn() {
	document.querySelector("#geoWatcherButton").innerHTML =
		"Activer la géolocalisation en direct";
}

function setButtonOff() {
	document.querySelector("#geoWatcherButton").innerHTML =
		"Désctiver la géolocalisation en direct";
}
```

![Le console nous indique que la position à été modifiée](/public/images/geolocation_watcher_console%202024-03-18%20145721.png)

# API MediaDevices

## Description

L'API mediaDevices est une partie de l'API WebRTC (Web Real-Time Communication) fournie par les navigateurs web modernes. Elle permet aux développeurs web d'accéder aux périphériques multimédias d'un utilisateur, tels que les caméras vidéo et les microphones, ainsi que de gérer les flux audio et vidéo en temps réel.

## Autorisation

Lorsque vous ferez appel aux méthodes de l'API MediaDevices depuis votre application et selon les réglages mis en place par l'utilisateur, un pop-up apparaitra depuis le navigateur de l'utilisateur pour qu'il vous autorise ou vous refuse à accéder à ces données. Il convient donc de s'assurer que l'application prend bien en compte les cas où l'utilisateur refuse l'accès à la géolocalisation de l'appareil.

La mise en forme du message d'autorisation est à la charge du navigateur et dépend de ce dernier.

## Mettre en route la camera de l'utilisateur

Dans cet exemple, nous allons activer la camera de l'utilisateur et afficher le résultat dans un élément HTML <code>video</code>.

<code>index.html</code> _mise en place du bouton, de la video et du script_

```html
<section class="section--container">
	<div class="section--wrapper">
		<h2>Média</h2>

		<div class="media--buttons">
			<button id="mediaCameraButton">Activer la camera</button>
		</div>

		<div class="media--camera--container">
			<video class="media--camera--video" id="mediaVideo">
				Le flux vidéo n'est pas disponible.
			</video>
		</div>
	</div>
</section>

<script type="module" src="src/scripts/media.js"></script>
```

<code>src/media.js</code> _vérification de la prise en charge de la fonctionnalité mediaDevices puis mise en place de l'écouteur d'évenement sur le bouton_

```js
// au chargement de la page, on écoute le click sur les boutons pour activer la fonctionnalité demandée //
window.addEventListener("load", initMedia);

function initMedia() {
	if ("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices) {
		console.log('La fonctionnalité "media" est disponible !');
	} else {
		console.log('La fonctionnalité "media" n\'est pas disponible !');
	}

	// camera - bouton //
	document
		.querySelector("#mediaCameraButton")
		.addEventListener("click", handleCamera);
}
```

<code>src/media.js</code> _initialisation de <code>stream</code> et choix entre activer ou désactiver le service_

```js
// initialisation de l'état stream //
let stream = null;

// on active ou désactive le stream selon la situation actuelle //
function handleCamera() {
	if (stream) {
		setButtonOn();
		stopStream();
	} else {
		setButtonOff();
		startStream();
	}
}
```

<code>src/media.js</code> _activation de la camera et affichage du résultat_

```js
// activation de la camera //
async function startStream() {
	stream = await navigator.mediaDevices.getUserMedia({
		// dans cet exemple, on utilise uniquement la camera //
		video: true,
		// mais vous pouvez changer les réglages selon votre installation //
		audio: false,
	});

	displayCamera();
}

// affichage de l'image dans l'application //
function displayCamera() {
	if (stream) {
		const video = document.querySelector("#mediaVideo");
		// l'élément video à besoin d'une source pour diffuser //
		video.srcObject = stream;
		// la video n'est pas en autoplay, il faut donc la démarer manuellement //
		video.play();
	}
}
```

<code>src/media.js</code> _pn gère l'affichage du bouton selon si le stream est en cours ou non_

```js
// modification de l'affichage du bouton //
function setButtonOn() {
	document.querySelector("#mediaCameraButton").innerHTML = "Activer la camera";
}

function setButtonOff() {
	document.querySelector("#mediaCameraButton").innerHTML =
		"Désctiver la camera";
}
```

## Arrêter le flux de la camera

Une fois le service lancé, il restera en marche jusqu'à ce que la page soit rechargée ou qu'on y l'arrête manuellement.

Le <code>stream</code> est composé de <code>tracks</code>, il convient de toutes les arrêter pour désactiver le service en cours. Dans notre exemple, seule la camera est utilisée, il n'y a donc qu'une seule <code>track</code>.

<code>src/media.js</code> _désactivation de la camera_

```js
// désactivation de la camera //
function stopStream() {
	if (stream) {
		// ici il n'y a qu'une seul piste de lancée, il faudra boucler sur toutes les pistes selon votre setup //
		const videoTrack = stream.getVideoTracks()[0];
		videoTrack.stop();
		// on réinitialise l'état du stream //
		stream = null;
	}
}
```

## Prendre une photo depuis la camera

Pour prendre une photo, on utilise le stream de la camera et enregistre un "instantané" de son affichage en cours.

On utilisera l'élément <code>canvas</code> pour générer l'image à partir du stream.

<code>index.html</code> _ajout du bouton, du canvas et de l'élément image qui recevra la photo_

```html
<section class="section--container">
	<div class="section--wrapper">
		<h2>Média</h2>

		<div class="media--buttons">
			<button id="mediaCameraButton">Activer la camera</button>
			<button id="mediaPhotoButton">Prendre une photo</button>
		</div>

		<div class="media--camera--container">
			// .... //

			<div class="media--camera--container">
				<video class="media--camera--video" id="mediaVideo">
					Le flux vidéo n'est pas disponible.
				</video>
			</div>

			<div class="media--photo--container">
				<img
					id="mediaPhoto"
					alt="L'image capturée sera affichée dans cette boîte." />
			</div>

			<canvas id="canvas"></canvas>
		</div>
	</div>
</section>
```

<code>src/media.js</code> _on prend la photo_

```js
// désactivation de la camera //
function handlePhoto() {
	// on ne prend la photo uniquement si le stream est lancé //
	if (stream) {
		// contient le stream en cours //
		const video = document.querySelector("#mediaVideo");
		// va recevoir l'instantané du stream et permet de générer une image //
		const canvas = document.querySelector("#canvas");
		// reçoit l'image générée //
		const photo = document.querySelector("#mediaPhoto");

		// on dimentionne le canvas pour que l'image récupérée soit aux bonnes dimensions //
		const { width, height } = video.getBoundingClientRect();
		canvas.width = width;
		canvas.height = height;

		// l'image est intégrée au canvas gràce à l'utilisation de son context //
		const context = canvas.getContext("2d");
		context.drawImage(video, 0, 0, width, height);
		// l'image est extraite du canvas //
		const data = canvas.toDataURL("image/png");
		// l'élément "photo" reçoit l'image et permet l'affichage //
		photo.setAttribute("src", data);
	}
}
```

Et voila, l'image est maintenant affichée ! On peut la recréée si elle ne convient pas, l'enregistrer dans le cache ou l'envoyer vers une base de donnée noSQL si le besoin s'en fait ressentir.

## Conclusion

L'utilisation des API geolocation et mediaDevices est assez simple et ouvre de nombreuses possibilités de fonctionnalités.

Il convient de bien préparer son application et de prendre en compte la possibilité d'un refus ou l'indisponibilité des services depuis le navigateur.


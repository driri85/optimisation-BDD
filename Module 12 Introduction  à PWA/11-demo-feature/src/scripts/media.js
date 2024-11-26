// INITIALISATION DU SERVICE //

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

	// photo - bouton //
	document
		.querySelector("#mediaPhotoButton")
		.addEventListener("click", handlePhoto);
}

// GESTION DE LA CAMERA //

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

// modification de l'affichage du bouton //
function setButtonOn() {
	document.querySelector("#mediaCameraButton").innerHTML = "Activer la camera";
}

function setButtonOff() {
	document.querySelector("#mediaCameraButton").innerHTML =
		"Désctiver la camera";
}

// GESTION DE LA PHOTO //

function handlePhoto() {
	// on ne prend la photo uniquement si le stream est lancé //
	if (stream) {
		const canvas = document.querySelector("#canvas");
		const video = document.querySelector("#mediaVideo");
		const photo = document.querySelector("#mediaPhoto");

		// on dimentionne le canvas pour que l'image récupérée soit aux bonnes dimensions //
		const { width, height } = getVideoDimensions();
		canvas.width = width;
		canvas.height = height;

		// l'image est intégrée au canvas //
		const context = canvas.getContext("2d");
		context.drawImage(video, 0, 0, width, height);
		// l'image est extraite du canvas //
		const data = canvas.toDataURL("image/png");
		// l'élément "photo" reçoit l'image et permet l'affichage //
		photo.setAttribute("src", data);
	}
}

function getVideoDimensions() {
	const video = document.querySelector("#mediaVideo");
	return video.getBoundingClientRect();
}

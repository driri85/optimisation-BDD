// INITIALISATION DU SERVICE / /

// au chargement de la page, on écoute le click sur les boutons pour activer la fonctionnalité demandée //
window.addEventListener("load", initFileSystem);

async function initFileSystem() {
	// on vérifie si le service est disponible depuis le navigateur de l'utilisateur //
	if ("showOpenFilePicker" in window || "showSaveFilePicker" in window) {
		console.log("Service file system disponible !");
	} else {
		return console.log("Service file system non disponible !");
	}

	// création du document - bouton //
	document
		.querySelector("#fileSystemCreateButton")
		.addEventListener("click", createFile);

	// chargement du document - bouton //
	document
		.querySelector("#fileSystemLoadButton")
		.addEventListener("click", loadFile);
}

// CREATION DU DOCUMENT //

function createFile() {
	// on vérifie que la photo est bien présente dans l'élément image (cf media.js) //
	if (document.querySelector("#mediaPhoto").src) {
		const canvas = document.querySelector("#canvas");

		// on extrait l'image du canvas //
		canvas.toBlob(async (blob) => {
			// on crée un fichier à partir des données obtenues et de l'interface File([data], name, options) //
			const file = new File([blob], "myPhoto.png", {
				type: "image/png",
			});

			try {
				// on ouvre le directory picker de l'utilisateur pour qu'il choisisse le dossier qui récéptionnera le fichier créé //
				const directoryHandle = await window.showDirectoryPicker();

				// on insère le fichier dans le dossier, il sera créé s'il n'existe pas déjà //
				const newFileHandle = await directoryHandle.getFileHandle(file.name, {
					create: true,
				});

				// ouverture de l'instance d'écriture //
				const writable = await newFileHandle.createWritable();
				// insertion des données du fichier //
				await writable.write(file);
				// fermeture de l'instance d'écriture //
				await writable.close();
			} catch (error) {
				// utilisation de try / catch pour gérer les erreurs ou refus de l'utilisateur //
				console.log("Erreur lors de la création du fichier : ", error.message);
			}
		});
	}
}

// CHARGEMENT DU DOCUMENT //

async function loadFile() {
	try {
		// ouverture du file picker de l'utilisateur //
		const [fileHandle] = await window.showOpenFilePicker();
		// on récupère le fichier choisi //
		const file = await fileHandle.getFile();
		// on créé une url à partir du fichier chargé pour pouvoir l'insérer dans l'élément <img /> du HTML //
		const url = URL.createObjectURL(file);
		// on insère les données dans l'élément <img /> //
		document.querySelector("#fileSystemImage").src = url;
	} catch (error) {
		// utilisation de try / catch pour gérer les erreurs ou refus de l'utilisateur //
		console.error("Erreur lors de la sélection du fichier :", error);
	}
}

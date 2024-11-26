import { getPersons, addPerson, delPerson } from "./db.js";
import {
	isOperationsWaitginInDBI,
	handleOperationsWaitingInDBI,
} from "./idb.js";

// SERVICE WORKER REGISTRATION //

if ("serviceWorker" in navigator) {
	try {
		await navigator.serviceWorker.register("./sw.js");
	} catch (error) {
		console.log("Le service worker n'a pu être enregistré :", error.message);
	}
}

// SYNC MANAGER REGISTRATION //

if ("SyncManager" in window) {
	const registration = await navigator.serviceWorker.ready;

	try {
		registration.sync.register("syncPerson");
	} catch (error) {
		console.log("Error registring syncManager : ", error.message);
	}
}

// INIT APP //

(async function initApp() {
	console.log("initApp()");

	// CATCH MESSAGES FROM SW //
	navigator.serviceWorker.addEventListener("message", async (event) => {
		console.log("get message from sw : ", event.data);

		// sync event from sw - RUN WAITING OPERATIONS //
		if (event.data === "onLine") {
			if (await isOperationsWaitginInDBI())
				await handleOperationsWaitingInDBI();
		}
	});

	await getAndDisplayPersons();

	// add person button //
	document.querySelector("#ajouter").addEventListener("click", handleAddPerson);
})();

// GET AND DISPLAY PERSONS DATA //

async function getAndDisplayPersons() {
	const persons = await getPersons();

	console.log("data : ", persons);
	resetDisplayPersons();

	if (persons) {
		persons.map(displayPerson);
	} else {
		handleErrorMessage(
			"Error getting data, please try later or add new data !"
		);
	}
}

// DISPLAY PERSONS ON APP //

function displayPerson(person) {
	const parent = document.querySelector("tbody");
	const template = document.getElementById("ligne").content.cloneNode(true);
	const container = template.querySelector("tr");

	template.querySelectorAll("td")[0].innerHTML = person.prenom;
	template.querySelectorAll("td")[1].innerHTML = person.nom;
	template.querySelector("tr").className = person.status
		? "table-success"
		: "table-danger";

	parent.append(template);

	container
		.querySelector(".btn-danger")
		.addEventListener("click", async (event) => {
			await delPerson(person);
			event.target.closest("tr").remove();
		});

	container
		.querySelector(".btn-warning")
		.addEventListener("click", async (event) => {
			// await modifierFire(person);
			person.status = !person.status;

			event.target.closest("tr").className = person.status
				? "table-success"
				: "table-danger";
		});
}

function resetDisplayPersons() {
	const container = document.querySelector("tbody");
	const children = container.querySelectorAll(":scope > tr");

	children.forEach((element) => element.remove());
}

// ADD PERSONS HANDLE //

async function handleAddPerson() {
	console.log("handleAddPerson()");

	const nom = document.querySelector("#nom").value.trim();
	const prenom = document.querySelector("#prenom").value.trim();

	if (!nom || !prenom) {
		return handleErrorMessage("Please complete all inputs !");
	}

	await addPerson({ nom, prenom, status: true });
	getAndDisplayPersons();
}

// HANDLE ERROR MESSAGE //

function handleErrorMessage(message) {
	console.log(message);
}

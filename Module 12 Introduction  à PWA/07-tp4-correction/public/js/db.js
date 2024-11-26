import {
	getPersonsFromDBI,
	putPersonInDBI,
	addPersonToDBI,
	delPersonFromDBI,
	cleanDBI,
} from "./idb.js";

const url = "https://vip-montpellier-default-rtdb.europe-west1.firebasedatabase.app/";

// GET //

export async function getPersons() {
	console.log("getPersons()");

	try {
		const response = await fetch(`${url}person.json`);
		const data = await response.json();

		if (!data) throw new Error("No data in DB !");

		// format persons data //
		const persons = Object.entries(data).map(
			([id, { nom, prenom, status }]) => {
				return {
					id,
					nom,
					prenom,
					status,
				};
			}
		);

		// set persons BDI list empty //
		await cleanDBI();
		// set persons BDI list with current data //
		persons.map(putPersonInDBI);

		return persons;
	} catch (error) {
		console.log("Error getting data from DB : ", error.message);

		// get persons from DBI //
		const data = getPersonsFromDBI();
		return data;
	}
}

// POST //

export async function addPerson({ nom, prenom, status }) {
	console.log("addPerson()");

	try {
		const response = await fetch(`${url}person.json`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify({ nom, prenom, status }),
		});

		if (!response.ok) throw new Error("DB is not accessible !");
	} catch (error) {
		console.log("Error adding data to DB : ", error.message);

		// set waiting query into DBI //
		addPersonToDBI({ nom, prenom, status });
	}
}

// DELETE //

export async function delPerson(person) {
	console.log("delPerson()");

	try {
		const response = await fetch(`${url}person/${person.id}.json`, {
			method: "DELETE",
		});

		if (!response.ok) throw new Error("DB is not accessible !");
	} catch (error) {
		console.log("Error adding data to DB : ", error.message);

		// set waiting query into DBI //
		delPersonFromDBI(person);
	}
}

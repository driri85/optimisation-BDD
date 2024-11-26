import { addPerson, delPerson } from "./db.js";
import "./umd.js";

// INIT DBI //

let dbPromise;

(async function initDB() {
	dbPromise = await idb.openDB("cocktail-store", 1, {
		upgrade(db) {
			db.createObjectStore("person", { keyPath: "id" });
			db.createObjectStore("addPerson", { keyPath: "timestamp" });
			db.createObjectStore("delPerson", { keyPath: "id" });
		},
	});
})();

// RESET person //

export async function cleanDBI() {
	console.log("cleanDBI()");
	const table = "person";

	try {
		const data = await getPersonsFromDBI();
		await Promise.all(
			data.map((person) => delOperationFromGetDBI(table, person))
		);
	} catch (error) {
		console.log("Error deleting all data from DBI : ", error.message);
	}
}

// GET person //

export async function getPersonsFromDBI() {
	console.log("getPersonsFromIDB()");
	const table = "person";

	try {
		const transaction = dbPromise.transaction(table, "readonly");
		const store = transaction.objectStore(table);

		return await store.getAll();
	} catch (error) {
		console.log("Error getting data from DBI : ", error.message);
	}
}

// GET addPerson //

async function getAddPersonFromDBI() {
	console.log("getAddPersonFromDBI()");
	const table = "addPerson";

	try {
		const transaction = dbPromise.transaction(table, "readonly");
		const store = transaction.objectStore(table);

		return await store.getAll();
	} catch (error) {
		console.log("Error putting data in DBI : ", error.message);
	}
}

// GET delPerson //

async function getDelPersonFromDBI() {
	console.log("getDelPersonFromDBI()");
	const table = "delPerson";

	try {
		const transaction = dbPromise.transaction(table, "readonly");
		const store = transaction.objectStore(table);

		return await store.getAll();
	} catch (error) {
		console.log("Error putting data in DBI : ", error.message);
	}
}

// POST person //

export async function putPersonInDBI(person) {
	console.log("putPersonInDBI()");
	const table = "person";

	try {
		const transaction = dbPromise.transaction(table, "readwrite");
		await transaction.store.put(person);

		return transaction.complete;
	} catch (error) {
		console.log("Error putting data in DBI : ", error.message);
	}
}

// POST addPerson //

export async function addPersonToDBI(person) {
	console.log("addPersonToDBI()");
	const table = "addPerson";

	try {
		const transaction = dbPromise.transaction(table, "readwrite");
		await transaction.store.put({ ...person, timestamp: Date.now() });

		return transaction.complete;
	} catch (error) {
		console.log("Error putting data in DBI : ", error.message);
	}
}

// POST delPerson //

export async function delPersonFromDBI(person) {
	console.log("delPersonFromDBI()");
	const table = "delPerson";

	try {
		const transaction = dbPromise.transaction(table, "readwrite");
		await transaction.store.put(person);

		return transaction.complete;
	} catch (error) {
		console.log("Error putting data in DBI : ", error.message);
	}
}

// CHECK WAINTING OPERATION (addPerson & delPerson) //

export async function isOperationsWaitginInDBI() {
	if (
		(await getDelPersonFromDBI()).length !== 0 ||
		(await getAddPersonFromDBI()).length !== 0
	)
		return true;
}

// FETCH THEN CLEAN EACH WAINTING OPERATION (addPerson & delPerson) //

export async function handleOperationsWaitingInDBI() {
	console.log("handleOperationsWaitingInDBI()");

	for (let person of await getAddPersonFromDBI()) {
		await addPerson(person);
		await delOperationFromAddDBI(person);
	}
	for (let person of await getDelPersonFromDBI()) {
		await delPerson(person);
		await delOperationFromDelDBI(person);
	}
}

// CLEAN WAINTING OPERATION (addPerson) //

export async function delOperationFromAddDBI(person) {
	console.log("delPersonFromDBI()");
	const table = "addPerson";

	try {
		const transaction = dbPromise.transaction(table, "readwrite");
		await transaction.store.delete(person.timestamp);

		return transaction.complete;
	} catch (error) {
		console.log("Error putting data in DBI : ", error.message);
	}
}

// CLEAN WAINTING OPERATION (delPerson) //

export async function delOperationFromDelDBI(person) {
	console.log("delPersonFromDBI()");
	const table = "delPerson";

	try {
		const transaction = dbPromise.transaction(table, "readwrite");
		await transaction.store.delete(person.id);

		return transaction.complete;
	} catch (error) {
		console.log("Error putting data in DBI : ", error.message);
	}
}

// CLEAN TABLE (person) //

async function delOperationFromGetDBI(table, person) {
	console.log("delOperationFromGetDBI()");

	try {
		const transaction = dbPromise.transaction(table, "readwrite");
		await transaction.store.delete(person.id);

		return transaction.complete;
	} catch (error) {
		console.log("Error putting data in DBI : ", error.message);
	}
}

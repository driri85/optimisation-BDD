import { createContext, useState } from "react";

export const PersonsContext = createContext();

export const PersonsProvider = ({ children }) => {
	const [persons, setPersons] = useState([]);

	function addPerson(person) {
		setPersons([...persons, person]);
	}

	function deletePerson(personId) {
		setPersons(persons.filter((person) => person.id !== personId));
	}

	function getPerson(personId) {
		return persons.find((person) => person.id === personId);
	}

	return (
		<PersonsContext.Provider
			value={{ persons, addPerson, deletePerson, getPerson }}>
			{children}
		</PersonsContext.Provider>
	);
};

// export { PersonsContext, PersonsProvider };

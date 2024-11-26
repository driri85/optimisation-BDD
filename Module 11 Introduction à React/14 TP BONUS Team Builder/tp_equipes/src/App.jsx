import AddPerson from "./components/AddPerson";
import AddTeams from "./components/AddTeam";
import ListPersons from "./components/ListPersons";
import ListTeams from "./components/ListTeams";
import { useState } from "react";

function App() {
	const [persons, setPersons] = useState([]);
	const [teams, setTeams] = useState([]);

	console.log("teams: ", teams);
	console.log("persons: ", persons);

	const addTeam = (team) => {
		setTeams([...teams, team]);
	};

	const deleteTeam = (teamId) => {
		setTeams(teams.filter((team) => teamId !== team.id));
	};

	const addPerson = (person) => {
		setPersons([...persons, person]);
	};

	const deletePerson = (personId) => {
		setPersons(persons.filter((person) => personId !== person.id));
	};

	const addPersonToTeam = (teamId, personId) => {
		setTeams(
			teams.map((team) => {
				if (+team.id === +teamId) {
					if (!team.persons.find((id) => +id === +personId))
						team.persons.push(personId);
				}
				return team;
			})
		);
	};

	return (
		<main className="main--wrapper">
			<AddTeams addTeam={addTeam} />
			<AddPerson
				teams={teams}
				addPerson={addPerson}
				addPersonToTeam={addPersonToTeam}
			/>
			<ListTeams teams={teams} persons={persons} deleteTeam={deleteTeam} />
			<ListPersons persons={persons} deletePersons={deletePerson} />
		</main>
	);
}

export default App;

import { createContext, useState } from "react";

export const TeamsContext = createContext();

export const TeamsProvider = ({ children }) => {
	const [teams, setTeams] = useState([]);

	function addTeam(team) {
		setTeams([...teams, team]);
	}

	function deleteTeam(teamId) {
		// filter 
		// selection de tous les elements du tableau 
		// correspondant au test
		setTeams(teams.filter((team) => team.id !== teamId));
	}

	function addPersonToTeam(teamId, personid) {
		setTeams(
			teams.map((team) => {
				if (+team.id === +teamId) {
					team.persons.push(personid);
				}
				return team;
			})
		);
	}

	function getTeam(teamId) {
		// trouver 1 element dans un tableau
		// correspondant à la condition
		// '42' == 42
		// 42 === 42

		return teams.find((team) => team.id === teamId);
	}

	return (
		<TeamsContext.Provider
			value={{ teams, addTeam, deleteTeam, addPersonToTeam, getTeam }}>
			{children}
		</TeamsContext.Provider>
	);
};

// export { TeamsContext, TeamsProvider };

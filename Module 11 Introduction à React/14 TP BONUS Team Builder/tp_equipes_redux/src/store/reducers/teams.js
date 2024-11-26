import { createSlice } from "@reduxjs/toolkit";

export const teamsSlice = createSlice({
	name: "teams",
	initialState: {
		teams: [],
	},

	reducers: {
		addTeam(state, action) {
			state.teams = [...state.teams, { ...action.payload, persons: [] }];
		},

		removeTeam(state, action) {
			state.teams = state.teams.filter(
				(team, index) => index !== action.payload
			);
		},

		addPersonToTeam(state, action) {
			state.teams = state.teams.map((team) => {
				if (+team.id === +action.payload.indexTeam) {
					team.persons = [...team.persons, action.payload.indexPerson];
				}
				return team;
			});
		},

		removePersonFromTeam(state, action) {
			state.teams = state.teams.map((team) => {
				const index = team.persons.indexOf(+action.payload.personId);
				console.log("index : ", index, action.payload.personId);
				if (index > -1) team.persons.splice(index, 1);
				return team;
			});
		},
	},
});

export const { addTeam, removeTeam, addPersonToTeam, removePersonFromTeam } =
	teamsSlice.actions;

export default teamsSlice.reducer;

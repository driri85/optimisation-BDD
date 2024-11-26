import { createSlice } from "@reduxjs/toolkit";

export const personsSlice = createSlice({
	name: "persons",
	initialState: {
		persons: [],
	},

	reducers: {
		addPerson(state, action) {
			state.persons = [...state.persons, action.payload];
		},

		removePerson(state, action) {
			state.persons = state.persons.filter(
				(person, index) => index !== action.payload
			);
		},
	},
});

export const { addPerson, removePerson } = personsSlice.actions;

export default personsSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import personsReducer from "./reducers/persons";
import teamsReducer from "./reducers/teams";

export default configureStore({
	reducer: {
		persons: personsReducer,
		teams: teamsReducer,
	},
});

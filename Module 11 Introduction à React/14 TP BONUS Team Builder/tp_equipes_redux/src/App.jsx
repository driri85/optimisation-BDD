import AddPerson from "./components/AddPerson";
import AddTeams from "./components/AddTeam";
import ListPersons from "./components/ListPersons";
import ListTeams from "./components/ListTeams";

function App() {
	return (
		<main className="main--wrapper">
			<AddTeams />
			<AddPerson />
			<ListTeams />
			<ListPersons />
		</main>
	);
}

export default App;

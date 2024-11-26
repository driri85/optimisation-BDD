import AddPerson from "./components/AddPerson";
import AddTeam from "./components/AddTeam";
import ListPersons from "./components/ListPersons";
import ListTeams from "./components/ListTeams";
import { PersonsProvider } from "./context/Persons";
import { TeamsProvider } from "./context/Teams";

function App() {
	return (
		<main className="main--wrapper">
			<TeamsProvider>
				<PersonsProvider>
					<AddTeam />
					<AddPerson />
					<ListTeams />
					<ListPersons />
				</PersonsProvider>
			</TeamsProvider>
		</main>
	);
}

export default App;

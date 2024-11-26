import React from "react";
import ButtonDelete from "./ButtonDelete";
import { useSelector, useDispatch } from "react-redux";
import { removeTeam } from "../store/reducers/teams";

const ListTeams = () => {
	const { teams } = useSelector((state) => state.teams);
	const { persons } = useSelector((state) => state.persons);
	const dispatch = useDispatch();

	const handleDelete = (index) => {
		dispatch(removeTeam(index));
	};

	return (
		<section className="section--container listTeams--container">
			<div className="section--wrapper listTeams--wrapper">
				{teams &&
					teams.map((team, index) => {
						return (
							<div key={index} className="team--table">
								<div className="team--header">
									<p>#{team.id}</p>
									<p>{team.name}</p>
									<ButtonDelete handleClick={handleDelete} index={index} />
								</div>
								<div className="team--info table--row">
									<p>Prénom</p>
									<p>Nom</p>
									<p>Age</p>
								</div>
								{team.persons &&
									team.persons.map((personId, index) => {
										const person = persons.find(
											(person) => person.id === personId
										);
										if (person)
											return (
												<div key={index} className="team--person table--row">
													<p>{person.firstName}</p>
													<p>{person.lastName}</p>
													<p>{person.age}</p>
												</div>
											);
									})}
							</div>
						);
					})}
			</div>
		</section>
	);
};

export default ListTeams;

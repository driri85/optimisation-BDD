import React from "react";
import ButtonDelete from "./ButtonDelete";
import { useSelector, useDispatch } from "react-redux";
import { removePerson } from "../store/reducers/persons";
import { removePersonFromTeam } from "../store/reducers/teams";

function ListPersons() {
	const { persons } = useSelector((state) => state.persons);
	const dispatch = useDispatch();

	const handleDelete = ({ index, personId }) => {
		dispatch(removePerson(index));
		dispatch(removePersonFromTeam({ personId }));
	};

	return (
		<section className="section--container  listPerson--container">
			<div className="section--wrapper listPerson--wrapper">
				{persons &&
					persons.map((person, index) => {
						return (
							<div key={index} className="listPerson--person--wrapper">
								<div className="listPerson--person--name">
									<p>{person.firstName}</p>
									<p>{person.lastName}</p>
								</div>
								<ButtonDelete
									handleClick={handleDelete}
									index={{ index, personId: person.id }}
								/>
							</div>
						);
					})}
			</div>
		</section>
	);
}

export default ListPersons;

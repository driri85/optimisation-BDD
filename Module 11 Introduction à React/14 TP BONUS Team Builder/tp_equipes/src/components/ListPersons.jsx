import React from "react";
import ButtonDelete from "./ButtonDelete";

function ListPersons({ persons, deletePersons }) {
	const handleDelete = (index) => {
		deletePersons(index);
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
								<ButtonDelete handleClick={handleDelete} id={person.id} />
							</div>
						);
					})}
			</div>
		</section>
	);
}

export default ListPersons;

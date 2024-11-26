import React, { useContext } from "react";
import ButtonValidate from "./ButtonValidate";
import { useRef, useState, useEffect } from "react";
import { isFormCompleted, sanitizeInputValue } from "../utils/checkForm";
import generateId from "../utils/generateId";
import { PersonsContext } from "../context/Persons";
import { TeamsContext } from "../context/Teams";

const AddPerson = () => {
	const { addPerson } = useContext(PersonsContext);
	const { teams, addPersonToTeam } = useContext(TeamsContext);

	// handling error message when form not ok
	const [errorMessage, setErrorMessage] = useState(false);

	useEffect(() => {
		if (!errorMessage) return;
		console.log(errorMessage);

		const errorMessageTimeout = async () => {
			setTimeout(() => {
				console.log("error message end");
				setErrorMessage(false);
			}, 3000);
		};

		errorMessageTimeout();
	}, [errorMessage]);

	// handling form submit
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const ageRef = useRef();
	const teamRef = useRef();

	const handleFormSubmit = (event) => {
		event.preventDefault();

		// check if all inputs needed are completed
		if (!isFormCompleted([firstNameRef, lastNameRef])) {
			setErrorMessage("Le formulaire n'est pas complet");
			return;
		}

		// create person object
		const id = generateId();
		const firstName = sanitizeInputValue(firstNameRef.current.value);
		const lastName = sanitizeInputValue(lastNameRef.current.value);
		const age = sanitizeInputValue(ageRef.current.value);
		addPerson({
			id,
			firstName,
			lastName,
			age,
		});

		// add to team if needed
		if (![undefined, null, ""].includes(teamRef.current.value)) {
			addPersonToTeam(teamRef.current.value, id);
		}

		// reset inputs values
		firstNameRef.current.value = "";
		lastNameRef.current.value = "";
		ageRef.current.value = "";
		teamRef.current.value = "";
	};

	return (
		<section className="section--container  addPerson--container">
			<div className="section--wrapper addPerson--wrapper">
				<form className="addPerson--form" onSubmit={handleFormSubmit}>
					<div className="form--labelInput--wrapper">
						<label className="form--label" htmlFor="personFirstName">
							Prénom :
						</label>
						<input
							type="text"
							className="form--input"
							id="personFirstName"
							ref={firstNameRef}
						/>
					</div>
					<div className="form--labelInput--wrapper">
						<label className="form--label" htmlFor="personLastName">
							Nom :
						</label>
						<input
							type="text"
							className="form--input"
							id="personLastName"
							ref={lastNameRef}
						/>
					</div>
					<div className="form--labelInput--wrapper">
						<label className="form--label" htmlFor="personAge">
							Age :
						</label>
						<input
							type="text"
							className="form--input"
							id="personAge"
							ref={ageRef}
						/>
					</div>
					<div className="form--labelInput--wrapper">
						<label htmlFor="personTeam" className="form--label">
							Team :
						</label>
						<select className="form--select" id="personTeam" ref={teamRef}>
							<option value="">&nbsp;</option>
							{teams &&
								teams.map((team, index) => {
									return (
										<option key={index} value={team.id}>
											{team.name}
										</option>
									);
								})}
						</select>
					</div>
					<div className="addPerson--submit--wrapper">
						<ButtonValidate label="Ajouter une personne" />
					</div>
				</form>
			</div>
		</section>
	);
};

export default AddPerson;

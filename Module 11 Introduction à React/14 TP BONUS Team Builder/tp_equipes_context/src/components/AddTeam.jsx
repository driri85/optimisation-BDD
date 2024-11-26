import React, { useContext } from "react";
import ButtonValidate from "./ButtonValidate";
import { useRef, useState, useEffect } from "react";
import generateId from "../utils/generateId";
import { isFormCompleted, sanitizeInputValue } from "../utils/checkForm";
import { TeamsContext } from "../context/Teams";

const AddTeam = () => {
	const { addTeam } = useContext(TeamsContext);

	// handling error message when form not ok
	const [errorMessage, setErrorMessage] = useState(false);

	// handle error message
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
	const inputRef = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();

		// check if all inputs needed are completed
		if (!isFormCompleted([inputRef])) {
			setErrorMessage("Le formulaire n'est pas complet");
			return;
		}

		// create team object
		const id = generateId();
		const name = sanitizeInputValue(inputRef.current.value);
		const persons = [];
		addTeam({
			id,
			name,
			persons
		});

		// reset inputs values
		inputRef.current.value = "";
	};

	return (
		<section className="section--container addTeam--container">
			<div className="section--wrapper addTeam--wrapper">
				<form className="addTeam--form">
					<label className="form--label addTeam--label" htmlFor="teammName">
						&Eacute;quipe :
					</label>
					<input
						type="text"
						className="form--input addTeam--input"
						id="teamName"
						ref={inputRef}
					/>
					<ButtonValidate
						label="Ajouter une équipe"
						handleClick={handleSubmit}
					/>
				</form>
			</div>
		</section>
	);
};

export default AddTeam;

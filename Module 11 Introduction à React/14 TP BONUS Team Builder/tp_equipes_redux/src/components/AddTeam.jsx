import React from "react";
import ButtonValidate from "./ButtonValidate";
import { useDispatch } from "react-redux";
import { addTeam } from "../store/reducers/teams";
import { useRef, useState, useEffect } from "react";
import generateId from "../utils/generateId";
import { isFormCompleted, sanitizeInputValue } from "../utils/checkForm";

const AddTeam = () => {
	const dispatch = useDispatch();

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
	const inputRef = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!isFormCompleted([inputRef])) {
			setErrorMessage("Le formulaire n'est pas complet");
			return;
		}

		const id = generateId();
		const name = sanitizeInputValue(inputRef.current.value);
		dispatch(addTeam({ id, name }));

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

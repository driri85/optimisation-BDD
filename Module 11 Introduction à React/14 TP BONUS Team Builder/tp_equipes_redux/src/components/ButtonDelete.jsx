import React from "react";

function ButtonDelete({ handleClick, index }) {
	return (
		<div className="buttonDelete--wrapper">
			<button
				className="buttonDelete--button"
				onClick={() => handleClick(index)}>
				<img
					src="/public/trashcan.png"
					alt="icone d'une poubelle pour supprimer l'élement"
					className="buttonDelete--image"
				/>
			</button>
		</div>
	);
}

export default ButtonDelete;

import React from "react";

function ButtonDelete({ handleClick, id }) {
	return (
		<div className="buttonDelete--wrapper">
			<button className="buttonDelete--button" onClick={() => handleClick(id)}>
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

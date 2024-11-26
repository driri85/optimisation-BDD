import React from "react";

function ButtonValidate({ label, handleClick }) {
	return (
		<div className="buttonValidate--wrapper">
			<button className="buttonValidate--button" onClick={handleClick}>
				<span>+</span>
				{label}
			</button>
		</div>
	);
}

export default ButtonValidate;

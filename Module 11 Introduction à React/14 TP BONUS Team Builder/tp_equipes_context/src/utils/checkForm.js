const entityMap = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': "&quot;",
	"'": "&#39;",
	"/": "&#x2F;",
	"`": "&#x60;",
	"=": "&#x3D;",
};

export function isFormCompleted(inputsRef) {
	return inputsRef.find((inputRef) =>
		[undefined, null, ""].includes(inputRef.current.value)
	)
		? false
		: true;
}

export function sanitizeInputValue(value) {
	return String(value).replace(/[&<>"'`=\/]/g, function (char) {
		return entityMap[char];
	});
}

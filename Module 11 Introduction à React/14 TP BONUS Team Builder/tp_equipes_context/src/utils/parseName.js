export default function parseName(name) {
	const string = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

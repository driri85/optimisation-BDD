export default function generateId() {
	return Math.round(getRandomArbitrary(0, 10000));
}

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

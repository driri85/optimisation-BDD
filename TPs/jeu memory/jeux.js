const container = document.querySelector('.container');
let firstCard,secondCard = null;
let matches = 0;
let startTime = Date.now();
let isProcessing = false;
const tableau1 = Array.from({ length: 12 }, (_, i) => i);
let tableau2 = [...tableau1, ...tableau1]
.sort(() => Math
.random() - 0.5)
.forEach((value) => {
    const tile = document.createElement('div');
    tile.dataset.value = value;
    tile.innerHTML = `<img src="img/${value}.webp" alt="Image ${value}">`;
    container.appendChild(tile);
    tile.addEventListener('click', () => handleTileClick(tile));
});
function handleTileClick(tile) {
    if (isProcessing || tile.classList.contains('flipped') || tile.classList.contains('hidden')) return;
    tile.classList.add('flipped');
    if (!firstCard) {
        firstCard = tile;
    } else if (!secondCard) {
        secondCard = tile;
        isProcessing = true;
        if (firstCard.dataset.value === secondCard.dataset.value) {
            setTimeout(() => {
                firstCard.classList.add('hidden');
                secondCard.classList.add('hidden');
                firstCard = secondCard = null;
                isProcessing = false;
                matches++;
                if (matches === tableau1.length) {
                    const endTime = Date.now();
                    alert(`Vous avez gagné ! Temps : ${((endTime - startTime) / 1000).toFixed(1)} secondes`);
                    restartGame();
                }
            }, 500);
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
                firstCard = secondCard = null;
                isProcessing = false;
            }, 1000);
        }
    }
}
function restartGame() {
    matches = 0;
    firstCard = secondCard = null;
    startTime = Date.now();
    container.innerHTML = '';
    tableau2 = [...tableau1, ...tableau1]
    .sort(() => Math
    .random() - 0.5)
    .forEach((value) => {
        const tile = document.createElement('div');
        tile.dataset.value = value;
        tile.innerHTML = `<img src="img/${value}.webp" alt="Image ${value}">`;
        container.appendChild(tile);
        tile.addEventListener('click', () => handleTileClick(tile));
    });
}
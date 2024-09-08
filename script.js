const GRID_SIZE = 16;
const COLOR = 'red';

const gridContainer = document.querySelector('#grid-container');
const newGridButton = document.querySelector('#new-grid');

drawGrid(GRID_SIZE);

newGridButton.addEventListener('click', () => replaceGrid());

function drawGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        for (let j = 0; j < gridSize; j++) {
            let gridCell = document.createElement('div');
            gridCell.classList.add('grid-cell');
            gridCell.addEventListener('mouseover', (event) => colorCell(event));
            gridRow.appendChild(gridCell);
        }
        gridContainer.appendChild(gridRow); 
    }
}

function colorCell(event) {
    event.target.style.backgroundColor = COLOR;
}

function replaceGrid() {
    let size = promptForSize();
    if (!size) {
        return 0;
    } else {
        gridContainer.replaceChildren();
        drawGrid(size);
    }
}

function promptForSize() {
    let size = Number(prompt('enter etch size (x by x)'));

    if (!(Number.isInteger(size))) {
        alert('enter whole number');
        return 0;
    } else if (size < 1 || size > 100) {
        alert('enter value between 1 and 100');
        return 0;
    }

    return size;
}
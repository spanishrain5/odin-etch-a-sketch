const DEFAULT_GRID_SIZE = 16;

const gridContainer = document.querySelector('#grid-container');
const colorSelectors = document.querySelector('#color-selectors');
const clearButton = document.querySelector('#clear');
const newGridButton = document.querySelector('#new-grid');

let currentGridSize = DEFAULT_GRID_SIZE;
let currentColor = 'red';

drawGrid(currentGridSize);

colorSelectors.addEventListener('click', (event) => changeColor(event));
clearButton.addEventListener('click', () => clearGrid());
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
    event.target.style.backgroundColor = currentColor;
}

function clearGrid() {
    gridContainer.replaceChildren();
    drawGrid(currentGridSize);
}

function replaceGrid() {
    let size = promptForSize();
    if (!size) {
        return 0;
    } else {
        currentGridSize = size;
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

function changeColor(event) {
    let oldColorButton = document.querySelector(`#${currentColor}`);
    oldColorButton.style.border = 'none';

    currentColor = event.target.id;

    event.target.style.border = '5px solid white';
}
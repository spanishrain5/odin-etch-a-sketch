const GRID_SIZE = 24;
const COLOR = 'red';

const gridContainer = document.querySelector('#grid-container');

for (let i = 0; i < GRID_SIZE; i++) {
    let gridRow = document.createElement('div');
    gridRow.classList.add('grid-row');
    for (let j = 0; j < GRID_SIZE; j++) {
        let gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        gridCell.addEventListener('mouseover', (event) => colorCell(event));
        gridRow.appendChild(gridCell);
    }
    gridContainer.appendChild(gridRow); 
}

function colorCell(event) {
    event.target.style.backgroundColor = COLOR;
}
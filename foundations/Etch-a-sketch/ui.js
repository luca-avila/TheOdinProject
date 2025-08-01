export function createGrid(gridSize) {
    const grid = document.createElement('div');
    grid.classList.add('grid');

    for (let i = 0; i < gridSize * gridSize; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
    }
    return grid;
}

export function setSquareSize(container, gridSize, squareAmount, className) {
    const squares = container.querySelectorAll(`.${className}`);
    squares.forEach(square => {
        square.style.width = `calc(${gridSize}px / ${squareAmount})`;
        square.style.height = `calc(${gridSize}px / ${squareAmount})`;
    });
}

export function displaySideLengthForm(){
    const container = document.createElement('div');

    const text = document.createElement('p');
    text.textContent = 'How many squares per side do you want?';
    container.appendChild(text);

    const form = document.createElement('input');
    form.setAttribute('type', 'text');
    container.appendChild(form);

    const startButton = document.createElement('button');
    startButton.textContent = 'Create grid';
    container.appendChild(startButton);

    return container;
}

export function clearExistingGrid() {
    const existingGrid = document.querySelector('.grid');
    if (existingGrid) {
        existingGrid.remove();
    }
}
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
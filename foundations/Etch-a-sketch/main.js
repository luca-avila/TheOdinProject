import { createGrid, setSquareSize } from "./ui.js";
import { setClickEvent } from "./logic.js";

const squaresAmount = 20;

const grid = createGrid(squaresAmount);
setSquareSize(grid, 500, squaresAmount, 'square');
setClickEvent(grid);

document.body.appendChild(grid);
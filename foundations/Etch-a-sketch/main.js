import { createGrid, setSquareSize, displaySideLengthForm, clearExistingGrid } from "./ui.js";
import { setClickEvent, setStartButtonEvent } from "./logic.js";

function startApp(squaresAmount){
    clearExistingGrid();
    const grid = createGrid(squaresAmount);
    setSquareSize(grid, 500, squaresAmount, 'square');
    setClickEvent(grid);
    document.body.appendChild(grid);
}

const sideLengthForm = displaySideLengthForm();
setStartButtonEvent(sideLengthForm, startApp);
document.body.appendChild(sideLengthForm);


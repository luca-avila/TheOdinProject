import { createButtons, createScreen } from './ui.js';

const calculator = createCalculator();
document.body.appendChild(calculator);

function createCalculator() {
    const calculatorContainer = document.createElement('div');
    const buttons = createButtons();
    const screen = createScreen();

    calculatorContainer.classList.add('calculator');

    calculatorContainer.appendChild(screen);
    calculatorContainer.appendChild(buttons);

    return calculatorContainer;
}

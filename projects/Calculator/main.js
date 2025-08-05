import { createButtons, createScreen } from './ui.js';
import { calculate, validateInput, validateNumber, validateOperator } from './logic.js';

const calculator = createCalculator();
const screen = calculator.querySelector('.screen');
const operator = screen.querySelector('.operator');
const operand1 = screen.querySelector('.operand1');
const operand2 = screen.querySelector('.operand2');
const result = screen.querySelector('.result');
const numbers = calculator.querySelectorAll('.number');

document.body.appendChild(calculator);

numbers.forEach(number => {
    number.addEventListener('click', addNumber);
});

function createCalculator() {
    const calculatorContainer = document.createElement('div');
    const buttons = createButtons();
    const screen = createScreen();

    calculatorContainer.classList.add('calculator');

    calculatorContainer.appendChild(screen);
    calculatorContainer.appendChild(buttons);

    return calculatorContainer;
}

function addNumber(event) {
    const number = event.target.textContent;

    if (!validateNumber(number)) return 'ERROR';

    if (!operator.textContent) {
        operand1.textContent += number;
    } else {
        operand2.textContent += number;
    }
}
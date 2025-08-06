import { getScreenElements, createCalculator, addNumber, addOperator } from './ui.js';
import { calculate, validateInput, validateNumber, validateOperator } from './logic.js';

const calculator = createCalculator(document);
document.body.appendChild(calculator);

const screen = getScreenElements(calculator);

const numbers = calculator.querySelectorAll('.numberButton');
const operators = calculator.querySelectorAll('.operatorButton');

numbers.forEach(number => {
    number.addEventListener('click', (event) => addNumber(screen, event));
});

operators.forEach(operator => {
    operator.addEventListener('click', (event) => addOperator(screen, event));
});




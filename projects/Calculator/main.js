import { getScreenElements, createCalculator, addNumber, addOperator, addResult } from './ui.js';

const calculator = createCalculator(document);
document.body.appendChild(calculator);

const screen = getScreenElements(calculator);
const numbers = calculator.querySelectorAll('.numberButton');
const operators = calculator.querySelectorAll('.operatorButton');
const equalButton = calculator.querySelector('.equalButton');

numbers.forEach(number => {
    number.addEventListener('click', (event) => addNumber(screen, event));
});

operators.forEach(operator => {
    operator.addEventListener('click', (event) => addOperator(screen, event));
});

equalButton.addEventListener('click', () => addResult(screen));




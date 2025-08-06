import { validateNumber, validateOperator, calculate } from './logic.js';


function createAddButton() {
    const button = document.createElement('button');
    button.classList.add('addButton', 'operatorButton');
    button.textContent = '+';

    return button;
}

function createSubstractButton() {
    const button = document.createElement('button');
    button.classList.add('substractButton', 'operatorButton');
    button.textContent = '-';

    return button;
}

function createMultiplyButton() {
    const button = document.createElement('button');
    button.classList.add('multiplyButton', 'operatorButton');
    button.textContent = '*';

    return button;
}

function createDivideButton() {
    const button = document.createElement('button');
    button.classList.add('divideButton', 'operatorButton');
    button.textContent = '/';

    return button;
}

function createEqualButton() {
    const button = document.createElement('button');
    button.classList.add('equalButton', 'operatorButton');
    button.textContent = '=';

    return button;
}

function createNumberButton(number) {
    const button = document.createElement('button');
    button.classList.add('numberButton');
    button.textContent = number;

    return button;
}

export function createClearButton() {
    const button = document.createElement('button');
    button.classList.add('clearButton');
    button.textContent = 'C';

    return button;
}

function createDeleteButton() {
    const button = document.createElement('button');
    button.classList.add('deleteButton');
    button.textContent = 'DEL';

    return button;
}

export function createButtons() {
    const div = document.createElement('div');
    const operatorsDiv = document.createElement('div');
    const numsDiv = document.createElement('div');

    operatorsDiv.classList.add('operators');
    numsDiv.classList.add('nums');
    div.classList.add('buttons');

    operatorsDiv.appendChild(createAddButton());
    operatorsDiv.appendChild(createSubstractButton());
    operatorsDiv.appendChild(createMultiplyButton());
    operatorsDiv.appendChild(createDivideButton());
    operatorsDiv.appendChild(createEqualButton());

    for (let i = 0; i < 10; i++) {
        const numberButton = createNumberButton(i);
        numberButton.classList.add('number');
        numsDiv.appendChild(numberButton);
    }

    div.appendChild(numsDiv);
    div.appendChild(operatorsDiv);
    numsDiv.appendChild(createClearButton());
    numsDiv.appendChild(createDeleteButton());

    return div;
}

export function createScreen() {
    const screen = document.createElement('div');
    const operand1 = document.createElement('span');
    const operator = document.createElement('span');
    const operand2 = document.createElement('span');
    const result = document.createElement('span');

    screen.classList.add('screen');
    operand1.classList.add('operand1');
    operator.classList.add('operator');
    operand2.classList.add('operand2');
    result.classList.add('result');

    screen.appendChild(operand1);
    screen.appendChild(operator);
    screen.appendChild(operand2);
    screen.appendChild(result);

    return screen;
}

export function createCalculator(container) {
    const calculatorContainer = container.createElement('div');
    const buttons = createButtons();
    const screen = createScreen();

    calculatorContainer.classList.add('calculator');

    calculatorContainer.appendChild(screen);
    calculatorContainer.appendChild(buttons);

    return calculatorContainer;
}

export function addNumber(screen, event) {
    screen.resultNode.textContent = '';
    const number = event.target.textContent;

    if (!validateNumber(number)) return 'ERROR';

    if (!screen.operatorNode.textContent) {
        screen.operand1Node.textContent += number;
    } else {
        screen.operand2Node.textContent += number;
    }
}

export function addOperator(screen, event) {
    if (!screen.operand1Node.textContent) return 'ERROR';
    
    const operator = event.target.textContent;
    if (!validateOperator(operator)) return 'ERROR';
    screen.operatorNode.textContent = operator;
}

export function addResult(screen) {
    if (!screen.operatorNode.textContent) return 'ERROR';
    if (!screen.operand2Node.textContent) return 'ERROR';

    const result = calculate(screen.operand1Node.textContent, screen.operand2Node.textContent, screen.operatorNode.textContent);
    screen.resultNode.textContent = result;

    screen.operand1Node.textContent = '';
    screen.operand2Node.textContent = '';
    screen.operatorNode.textContent = '';
}


export function getScreenElements(calculator) {
    const screenNode = calculator.querySelector('.screen');
    const screen = {
        operatorNode: screenNode.querySelector('.operator'),
        operand1Node: screenNode.querySelector('.operand1'),
        operand2Node: screenNode.querySelector('.operand2'),
        resultNode: screenNode.querySelector('.result'),
    }
    return screen;
}

export function clearScreen(screen) {
    console.log('clearScreen called');
    screen.operand1Node.textContent = '';
    screen.operand2Node.textContent = '';
    screen.operatorNode.textContent = '';
    screen.resultNode.textContent = '';
}

export function deleteFromScreen(screen) {
    if (!screen.operand1Node.textContent) return 'ERROR';
    
    if (screen.operatorNode.textContent && !screen.operand2Node.textContent) {
        screen.operatorNode.textContent = '';
    }
    else if (screen.operatorNode.textContent && screen.operand2Node.textContent) {
        screen.operand2Node.textContent = screen.operand2Node.textContent.slice(0, -1);
    }
    else {
        screen.operand1Node.textContent = screen.operand1Node.textContent.slice(0, -1);
    }
}
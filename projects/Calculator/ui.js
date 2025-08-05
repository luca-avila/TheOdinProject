function createAddButton() {
    const button = document.createElement('div');
    button.classList.add('addButton');
    button.textContent = '+';

    return button;
}

function createSubstractButton() {
    const button = document.createElement('div');
    button.classList.add('substractButton');
    button.textContent = '-';

    return button;
}

function createMultiplyButton() {
    const button = document.createElement('div');
    button.classList.add('multiplyButton');
    button.textContent = '*';

    return button;
}

function createDivideButton() {
    const button = document.createElement('div');
    button.classList.add('divideButton');
    button.textContent = '/';

    return button;
}

function createEqualButton() {
    const button = document.createElement('div');
    button.classList.add('equalButton');
    button.textContent = '=';

    return button;
}

function createNumberButton(number) {
    const button = document.createElement('div');
    button.classList.add('numberButton');
    button.textContent = number;

    return button;
}

function createClearButton() {
    const button = document.createElement('div');
    button.classList.add('clearButton');
    button.textContent = 'C';

    return button;
}

function createDeleteButton() {
    const button = document.createElement('div');
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

export function addNumber(container, event) {
    const number = event.target.textContent;

    if (!validateNumber(number)) return 'ERROR';

    if (!operator.textContent) {
        operand1.textContent += number;
    } else {
        operand2.textContent += number;
    }


}
function createAddButton() {
    const button = document.createElement('div');
    button.classList.add('addButton');
    button.textContent = '+';
}

function createSubstractButton() {
    const button = document.createElement('div');
    button.classList.add('substractButton');
    button.textContent = '-';
}

function createMultiplyButton() {
    const button = document.createElement('div');
    button.classList.add('multiplyButton');
    button.textContent = '*';
}

function createDivideButton() {
    const button = document.createElement('div');
    button.classList.add('divideButton');
    button.textContent = '/';
}

function createEqualButton() {
    const button = document.createElement('div');
    button.classList.add('equalButton');
    button.textContent = '=';
}

function createNumberButton(number) {
    const button = document.createElement('div');
    button.classList.add('numberButton');
    button.textContent = number;
}

function createClearButton() {
    const button = document.createElement('div');
    button.classList.add('clearButton');
    button.textContent = 'C';
}

function createDeleteButton() {
    const button = document.createElement('div');
    button.classList.add('deleteButton');
    button.textContent = 'DEL';
}
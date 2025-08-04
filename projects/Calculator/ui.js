export function createAddButton() {
    const button = document.createElement('div');
    button.classList.add('addButton');
    button.textContent = '+';
}

export function createSubstractButton() {
    const button = document.createElement('div');
    button.classList.add('substractButton');
    button.textContent = '-';
}

export function createMultiplyButton() {
    const button = document.createElement('div');
    button.classList.add('multiplyButton');
    button.textContent = '*';
}

export function createDivideButton() {
    const button = document.createElement('div');
    button.classList.add('divideButton');
    button.textContent = '/';
}

export function createEqualButton() {
    const button = document.createElement('div');
    button.classList.add('equalButton');
    button.textContent = '=';
}

export function createNumberButton(number) {
    const button = document.createElement('div');
    button.classList.add('numberButton');
    button.textContent = number;
}

export function createClearButton() {
    const button = document.createElement('div');
    button.classList.add('clearButton');
    button.textContent = 'C';
}

export function createDeleteButton() {
    const button = document.createElement('div');
    button.classList.add('deleteButton');
    button.textContent = 'DEL';
}
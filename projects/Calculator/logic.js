function add(n1, n2) {
    return n1 + n2;
}

function substract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

export function calculate(n1, n2, operator) {
    switch (operator) {
        case '+':
            return add(n1, n2);
        case '-':
            return substract(n1, n2);
        case '*':
            return multiply(n1, n2);
        case '/':
            return divide(n1, n2);
        default:
            return 'Invalid operator';
    }
}

// Validations

export function validateNumber(number) {
    if (typeof number !== 'number') {
        return false;
    }
    return true;
}

export function validateOperator(operator) {
    if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
        return false;
    }
    return true;
}

export function validateInput(n1, n2, operator) {
    if (!validateNumber(n1) || !validateNumber(n2) || !validateOperator(operator)) {
        return false;
    }
    return true;
}
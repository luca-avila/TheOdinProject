import { createAddButton, createSubstractButton, createMultiplyButton, createDivideButton, createEqualButton, createNumberButton, createClearButton, createDeleteButton } from './ui.js';

const calculatorContainer = document.getElementById('calculator');
let buttonsContainer = document.getElementById('buttons');
let screenContainer = document.getElementById('screen');
let operand1 = document.getElementById('operand1');
let operand2 = document.getElementById('operand2');
let operator = document.getElementById('operator');
let result = document.getElementById('result');
let buttons = [];

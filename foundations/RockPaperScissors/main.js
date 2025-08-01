import { getComputerChoice, getResult } from './game.js';
import { displaySelection, displayResult, updateScore } from './UI.js';

const selectionNode = document.querySelector('#selection');
const resultNode = document.querySelector('#result');
const humanScore = document.querySelector('#human');
const computerScore = document.querySelector('#computer');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});

function handleClick(e) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice(e);
    const result = getResult(humanChoice, computerChoice);

    displaySelection(humanChoice, computerChoice, selectionNode);
    displayResult(result, resultNode);
    updateScore(result, humanScore, computerScore);
}

function getHumanChoice(e) {
    return e.currentTarget.dataset.choice;
}
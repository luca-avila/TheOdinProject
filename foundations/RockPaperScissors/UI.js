import { OPTIONS } from './game.js';

export function displaySelection(humanChoice, computerChoice, selectionNode) {
    selectionNode.textContent = 
    `You choose: ${humanChoice}, Computer choose: ${computerChoice}`;
}

export function displayResult(result, resultNode) {
    switch (result) {
        case 'Tie':
            resultNode.textContent = 'It\'s a tie!';
            break;
        case 'Human':
            resultNode.textContent = 'Human wins!';
            break;
        case 'Computer':
            resultNode.textContent = 'Computer wins!';
            break;
    }
}

export function updateScore(result, humanNode, computerNode) {
    switch (result) {
        case 'Tie':
            return;
        case 'Human':
            humanNode.textContent = +humanNode.textContent + 1;
            break;
        case 'Computer':
            computerNode.textContent = +computerNode.textContent + 1;
            break;
    }
}

export function createButtons() {
    const buttons = document.createElement('div');
    for (let i = 0; i < 3; i++) {
        const button = document.createElement('button');
        button.textContent = OPTIONS[i];
        button.dataset.choice = OPTIONS[i];
        buttons.appendChild(button);
    }
    return buttons;
}

function createSelection() {
    const selectionNode = document.createElement('p');
    selectionNode.classList.add('selection');
    selectionNode.textContent = 'Choose your weapon';
    return selectionNode;
}

function createResult() {
    const resultNode = document.createElement('p');
    resultNode.classList.add('result');
    resultNode.textContent = 'Result';
    return resultNode;
}

function createScore() {
    const scoreNode = document.createElement('p');
    const humanNode = document.createElement('span');
    const computerNode = document.createElement('span');
    
    humanNode.classList.add('human');
    humanNode.textContent = '0';
    computerNode.classList.add('computer');
    computerNode.textContent = '0';
    
    scoreNode.textContent = 'Human ';
    scoreNode.appendChild(humanNode);
    scoreNode.appendChild(document.createTextNode(' - '));
    scoreNode.appendChild(computerNode);
    scoreNode.appendChild(document.createTextNode(' Computer'));
    
    return scoreNode;
}

export function playGame() {
    const game = document.createElement('div');
    const buttons = createButtons();
    const selection = createSelection();
    const result = createResult();
    const score = createScore();
    game.appendChild(buttons);
    game.appendChild(selection);
    game.appendChild(result);
    game.appendChild(score);
    return game;
}

export function finishGame(winner) {
    const div = document.createElement('div');

    const p = document.createElement('p');
    p.textContent = winner;

    const playAgain = document.createElement('button');
    playAgain.textContent = 'Play Again!';
    playAgain.classList.add('playAgain');

    div.appendChild(p);
    div.appendChild(playAgain);

    return div;
}
import { getComputerChoice, getResult } from './game.js';
import { playGame, displayResult, displaySelection, updateScore, finishGame } from './UI.js';

const startButton = document.querySelector('#start');

startButton.addEventListener('click', () => {
    startButton.remove();
    startGame();
});

function startGame() {
    let game = playGame();
    let resultNode = game.querySelector('.result');
    let selectionNode = game.querySelector('.selection');
    let humanScore = game.querySelector('.human');
    let computerScore = game.querySelector('.computer');
    let buttons = game.querySelectorAll('button');

    buttons.forEach(button => button.addEventListener('click', handleClick));

    document.body.appendChild(game);

    function handleClick(e) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice(e);
        const result = getResult(humanChoice, computerChoice);
    
        displaySelection(humanChoice, computerChoice, selectionNode);
        displayResult(result, resultNode);
        updateScore(result, humanScore, computerScore);
    
        if (humanScore.textContent === '5' || computerScore.textContent === '5') {
            game.remove();
            const finishGameNode = finishGame(resultNode.textContent);

            const playAgainButton = finishGameNode.querySelector('.playAgain');
            playAgainButton.addEventListener('click', () => {
                finishGameNode.remove();
                startGame();
            });

            document.body.appendChild(finishGameNode);
        }
    }
}

function getHumanChoice(e) {
    return e.currentTarget.dataset.choice;
}
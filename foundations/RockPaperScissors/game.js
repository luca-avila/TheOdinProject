const OPTIONS = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button');

function getHumanChoice(e) {
    return e.currentTarget.dataset.choice;
}

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    return OPTIONS[num];
}

function whoBeats(choice1, choice2) {
    const winConditions = {
        'rock': 'scissors',
        'paper': 'rock', 
        'scissors': 'paper'
    };

    if (choice1 === choice2) {
        return 'tie';
    } else if (winConditions[choice1] === choice2) {
        return choice1;
    } else {
        return choice2;
    }
}

function getWinner(humanChoice, computerChoice) {
    const winner = whoBeats(humanChoice, computerChoice);

    if (winner === 'tie') {
        return 'Tie';
    } else if (winner === humanChoice) {
        return 'Human';
    } else {
        return 'Computer';
    }
}
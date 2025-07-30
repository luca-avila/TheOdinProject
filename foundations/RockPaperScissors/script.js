const OPTIONS = ['rock', 'paper', 'scissors'];

function getHumanChoice() {
    let humanChoice;

    do {
        humanChoice = prompt('Rock, paper or scissors?').toLowerCase();
    } while (!OPTIONS.includes(humanChoice));

    return humanChoice;
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
        return 'Tie';
    } else if (winConditions[choice1] === choice2) {
        return choice1;
    } else {
        return choice2;
    }
}

function getWinner(humanChoice, computerChoice) {
    const winner = whoBeats(humanChoice, computerChoice);

    if (winner === 'Tie') {
        return 'It\'s a tie!';
    } else if (winner === humanChoice) {
        return 'Human wins!';
    } else {
        return 'Computer wins!';
    }
}

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(humanChoice, computerChoice);

    print(winner);
    if (winner === 'Human wins!') {
        print(`${humanChoice} beats ${computerChoice}`);
    } else if (winner === 'Computer wins!') {
        print(`${computerChoice} beats ${humanChoice}`);
    } else {
        print(`${humanChoice} and ${computerChoice} are the same`);
    }
}

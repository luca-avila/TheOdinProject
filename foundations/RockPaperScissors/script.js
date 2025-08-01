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
        return 'Tie!';
    } else if (winner === humanChoice) {
        return 'Human';
    } else {
        return 'Computer';
    }
}

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(humanChoice, computerChoice);

    if (winner === 'Human') {
        return 'Human';
    } else if (winner === 'Computer') {
        return 'Computer';
    } else {
        return 'Tie';
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;  

    for (let i = 0; i < 5; i++) {
        const winner = playRound();
        if (winner === 'Human') {
            humanScore++;
        } else if (winner === 'Computer') {
            computerScore++;
        }
    }

    console.log(`Human: ${humanScore} - Computer: ${computerScore}`);
}
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

function getWinner(humanChoice, computerChoice) {

    const winConditions = {
        'rock': 'scissors',
        'paper': 'rock', 
        'scissors': 'paper'
    };
    
    if (humanChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (winConditions[humanChoice] === computerChoice) {
        return 'Human wins!';
    } else {
        return 'Computer wins!';
    }
}
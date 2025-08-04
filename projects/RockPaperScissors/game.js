export const OPTIONS = ['rock', 'paper', 'scissors'];

export function getComputerChoice() {
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

export function getResult(humanChoice, computerChoice) {
    const result = whoBeats(humanChoice, computerChoice);

    if (result === 'tie') {
        return 'Tie';
    } else if (result === humanChoice) {
        return 'Human';
    } else {
        return 'Computer';
    }
}
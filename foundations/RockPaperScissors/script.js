const OPTIONS = ['rock', 'paper', 'scissors'];

function getHumanChoice() {
    let humanChoice;

    do {
        humanChoice = prompt('Rock, paper or scissors?').toLowerCase();
    } while (!options.includes(humanChoice));

    return humanChoice;
}

// Get computer choice
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    return OPTIONS[num];
}

// Play one round
// Play five rounds
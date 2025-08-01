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

export function updateScore (result, humanNode, computerNode) {
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
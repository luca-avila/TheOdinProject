export function setClickEvent(container) {
    const squares = container.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', ()=>{
            square.style.backgroundColor = '#183642';
        });
    });
}

export function setStartButtonEvent(form, callback){
    const startButton = form.querySelector('button');
    startButton.addEventListener('click', ()=>{
        const sideLength = form.querySelector('input').value;

        if (sideLength < 1 || sideLength > 100) {
            alert('Please enter a number between 1 and 100');
            return;
        } else if (isNaN(sideLength)) {
            alert('Please enter a valid number');
            return;
        }

        callback(sideLength);
    });
}
export function setClickEvent(container) {
    const squares = container.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', ()=>{
            square.style.backgroundColor = 'black';
        });
    });
}

export function setStartButtonEvent(form, callback){
    const startButton = form.querySelector('button');
    startButton.addEventListener('click', ()=>{
        const sideLength = form.querySelector('input').value;
        callback(sideLength);
    });
}
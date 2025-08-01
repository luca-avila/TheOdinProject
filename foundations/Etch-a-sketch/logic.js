export function setClickEvent(container) {
    const squares = container.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', ()=>{
            square.style.backgroundColor = 'black';
        });
    });
}
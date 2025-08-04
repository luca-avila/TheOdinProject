const fibonacci = function(num) {

    if (num == 0) return 0;
    if (num == 1) return 1;
    if (num < 0) return 'OOPS';

    let prev = 0;
    let curr = 1;
    
    let next = 0;

    for (let i = 2; i <= num; i++) {
        next = prev + curr;
        prev = curr;
        curr = next;
    }
    return next;
};

// Do not edit below this line
module.exports = fibonacci;

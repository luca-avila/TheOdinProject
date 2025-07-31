const sumAll = function(a, b) {
    let major = 0;
    let minor = 0;

    if (a < 0 ||
         b < 0 ||
        typeof a != 'number'||
        typeof b != 'number' ||
        Math.floor(a) != a ||
        Math.floor(b) != b
    ) return 'ERROR';

    if (b > a) {
        major = b;
        minor =  a;
    } else {
        major = a;
        minor = b;
    }


    let sum = 0;
    for (let i = minor; i <= major; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

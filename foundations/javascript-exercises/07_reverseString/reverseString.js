const reverseString = function(str) {
    const len = str.length;
    let reversed = '';

    for (let i = len -1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;

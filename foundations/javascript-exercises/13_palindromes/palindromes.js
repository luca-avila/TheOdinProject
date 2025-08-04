const palindromes = function (str) {
    let reversed = '';
    let onlyLetters = '';
    const strLen = str.length;

    for (let i = 0; i < strLen; i++) {
        if (isntLetter(str[i])) continue;
        onlyLetters += str[i].toLowerCase();
    }

    const lettersLen = onlyLetters.length;

    for (let i = lettersLen - 1; i >= 0; i--) {
        reversed += onlyLetters[i];
    }
    
    return reversed === onlyLetters;
};

function isntLetter(char) {
    const code = char.charCodeAt(0);
    if (!(code >= 65 && code <= 90) && !(code >= 97 && code <= 122) && !(code >= 48 && code <= 57)) {
        return true;
    }
    return false;
}
// Do not edit below this line
module.exports = palindromes;

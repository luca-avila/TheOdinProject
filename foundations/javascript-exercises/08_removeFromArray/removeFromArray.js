const removeFromArray = function(arr, ...toRemove) {
    return arr.filter(item => !toRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
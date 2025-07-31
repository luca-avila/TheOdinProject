function testFilterRange() {
    const result = filterRange([1, 2, 3, 4, 5, 6], 3, 5);
    const expected = [3, 4, 5];
    
    return result.length === expected.length && 
           result.every((item, index) => item === expected[index]);
}

function filterRange(arr, min, max) {
    return arr.filter(item => item >= min && item <= max);
}
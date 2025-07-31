function testFilterRange() {
    const myArr = [1, 2, 3, 4, 5, 6, 7];
    const expected = [3, 4, 5];

    filterRange(myArr, 3, 5);

    return myArr.length === expected.length &&
        myArr.every((num, index) => num === expected[index]);
}

function filterRange(arr, min, max) {
    const wrong = arr.filter(num => num < min || num > max);

    for (const num of wrong) {
        const index = arr.indexOf(num);
        arr.splice(index, 1);
    }
}
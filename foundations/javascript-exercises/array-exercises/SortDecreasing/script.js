function testSortDecreasing() {
    const arr = [1, 3, 6, 8, 2, 10];
    const expected = [10, 8, 6, 3, 2, 1];

    sortDecreasing(arr);

    return arr.length === expected.length &&
    arr.every((num, index) => num === expected[index]);
}

function sortDecreasing(arr) {
    const len = arr.length;

    for (let i = 0; i < len; i++){

        for (let j = i + 1; j < len; j++) {
            
            if (arr[i] < arr[j]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
}
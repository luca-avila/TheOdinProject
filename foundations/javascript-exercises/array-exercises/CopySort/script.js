function testCopySort() {
    const arr = ["HTML", "JavaScript", "CSS"];
    const expected = ["CSS", "HTML", "JavaScript"];

    const result = copySort(arr);

    return result.length === expected.length &&
    result.every((item, index) => item === expected[index]);
}

function copySort(arr) {
    return arr.slice(0).sort();
}
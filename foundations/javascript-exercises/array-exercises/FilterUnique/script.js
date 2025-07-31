function testFilterUnique(){
    const strings = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
      ];
    const expected = ["Hare", "Krishna", ":-O"];
    const result = filterUnique(strings);

    return expected.length === result.length &&
    result.every((str, index) => str === expected[index]);
}

function filterUnique(arr){
    let uniques = [];

    for (let str of arr) {
        if (!uniques.includes(str)){
            uniques.push(str);
        }
    }

    return uniques;
}
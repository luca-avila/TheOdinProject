let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];



alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

function getAverageAge(arr) {
    return arr.reduce((accumulator, person) => person.age + accumulator, 0) / arr.length;
}
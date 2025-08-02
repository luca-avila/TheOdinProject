let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary];

let nameArray = [];

for (let user of users ){
    nameArray.push(user.name);
}

for (let name of nameArray) {
    console.log(name);
}
const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear();
    let oldestAge;
    let oldestPerson;

    // Initialize with first person
    oldestAge = arr[0].yearOfDeath ? arr[0].yearOfDeath - arr[0].yearOfBirth : currentYear - arr[0].yearOfBirth;
    oldestPerson = arr[0];
    
    for (let i = 1; i < arr.length; i++){
        const age = arr[i].yearOfDeath ? arr[i].yearOfDeath - arr[i].yearOfBirth : currentYear - arr[i].yearOfBirth;
        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = arr[i];
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

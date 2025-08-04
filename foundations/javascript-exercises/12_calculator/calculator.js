const add = function(...nums) {
	  return nums.reduce((accumulator, current) => accumulator + current, 0);
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	return nums.reduce((accumulator, current) => accumulator + current, 0);
};

const multiply = function(nums) {
  return nums.reduce((accumulator, current) => accumulator * current, 1);
};

const power = function(num, power) {
  let accumulator = num;

  for (let i = 0; i < power - 1; i++) {
    accumulator = accumulator * num;
  }

  return accumulator;
};

const factorial = function(num) {
  let accumulator = 1;

  if (num === 0) return 1;

	for (let i = 1; i <= num; i++) {
    accumulator *= i;
  }
  return accumulator;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

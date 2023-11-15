//Write a function called calculate that takes two numbers (a and b) and a callback function (operationFn) as arguments.
//It should apply the callback function to a and b and return the result.

const calculate = (a, b, operationFn) => operationFn(a, b);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    return 'Cannot divide by zero!';
  }
  return a / b;
};

console.log(calculate(5, 3, add));
console.log(calculate(5, 3, subtract));
console.log(calculate(5, 3, multiply));
console.log(calculate(10, 2, divide));
console.log(calculate(5, 0, divide));
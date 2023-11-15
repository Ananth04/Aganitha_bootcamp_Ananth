//Write a function called composeWithReduce that takes an array of functions and returns a new function.
//The new function should be the composition of all the functions in the array, achieved using Array.reduce().

const composeWithReduce = (functions) => {
    return functions.reduce((f, g) => (...args) => g(f(...args)));
};

const addTwo = x => x + 2;
const multiplyByThree = x => x * 3;
const square = x => x * x;
const arrayOfFunctions = [addTwo, multiplyByThree, square];
const composedFunction = composeWithReduce(arrayOfFunctions);
const result = composedFunction(2);
console.log(result);
  
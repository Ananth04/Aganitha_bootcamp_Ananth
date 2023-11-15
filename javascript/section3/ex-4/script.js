//Write a function called operateOnArray that takes an array and a function (operationFn) as arguments.
//It should apply operationFn to each element of the array and return a new array with the results.

const operateOnArray = (array, operationFn) => {
    return array.map(operationFn);
};

const tripled = number => number * 3;
const numbersArray = [1, 2, 3, 4, 5];

const tripledNumbers = operateOnArray(numbersArray, tripled);
console.log(tripledNumbers);
  
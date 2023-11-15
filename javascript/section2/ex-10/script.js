//Given an array of numbers, find the sum of all positive numbers.

const numbers = [3, -2, 7, -5, 10, -8, 4];
const positiveNumbers = numbers.map(number => (number > 0 ? number : 0));
const sumOfPositiveNumbers = positiveNumbers.reduce((acc, val) => acc + val, 0);
console.log(sumOfPositiveNumbers);

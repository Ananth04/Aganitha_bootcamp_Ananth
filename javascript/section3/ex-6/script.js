//Write a function called sortNumbers that takes an array of numbers and a comparison function (compareFn).
//It should use the Array.sort() method with the custom comparison function to sort the numbers.

const sortNumbers = (numbers, compareFn) => {
    return numbers.sort(compareFn);
};

const descendingOrder = (a, b) => b - a;
const numbersArray = [3, 1, 5, 2, 4];
const sortedNumbers = sortNumbers(numbersArray, descendingOrder);
console.log(sortedNumbers);
  
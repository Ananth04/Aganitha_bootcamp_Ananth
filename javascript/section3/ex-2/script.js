//Write a function called filterAndMap that takes an array of numbers and two functions (filterFn and mapFn).
//It should filter out the even numbers using filterFn and then apply mapFn to square each remaining number.

const filterAndMap = (numbers, filterFn, mapFn) => {
    const filteredNumbers = numbers.filter(filterFn);
    const mappedNumbers = filteredNumbers.map(mapFn);
    return mappedNumbers;
};
  
const filterEven = number => number % 2 !== 0;
const squareNumber = number => number * number;
  
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = filterAndMap(numbersArray, filterEven, squareNumber);
  
console.log(result);
  
//Given an array of numbers, filter out all even numbers and 
//create a new array with only the odd numbers.

let arr = [1,2,3,4,5,6,7,8];
let newArr = arr.filter((num) => num % 2 != 0);
console.log(arr);
console.log(newArr);
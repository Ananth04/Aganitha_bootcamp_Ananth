//Create an array. Add a number to the front. Add a number at specific index. Add at the end.

let arr = [];
arr.unshift(1);
arr.splice(1,0,2);
arr.push(3);
console.log(arr);
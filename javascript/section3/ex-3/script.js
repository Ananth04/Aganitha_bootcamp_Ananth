//Write a higher-order function called multiplyBy that takes a number x as an argument and returns a function.
//The returned function should take another number y and multiply it by x.

const multiplyBy = x => {
    return y => x * y;
};

const multiplyByFive = multiplyBy(5);  
const result = multiplyByFive(8);
console.log(result);
  
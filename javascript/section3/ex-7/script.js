//Write a recursive function called fibonacci that calculates the nth Fibonacci number.
//The function should use a recursive approach to calculate Fibonacci numbers.

const fibonacci = n => {
    if(n < 0)
        return "'n' should not be negative.";
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

const n = 3;
const result = fibonacci(n);
console.log(`The ${n}th Fibonacci number is: ${result}`);
  
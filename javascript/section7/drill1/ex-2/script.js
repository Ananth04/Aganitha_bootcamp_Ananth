//Write a program that uses the function.
//Take a number on the command line and print the result.

const {fibonacci} = require("../ex-1/script");

const inputNumber = parseInt(process.argv[2]);

if (isNaN(inputNumber) || inputNumber < 0)
    console.log('Please provide a valid positive number as an argument.');
else {
    const result = fibonacci(inputNumber);
    console.log(`Fibonacci number at ${inputNumber} position:`, result);
}
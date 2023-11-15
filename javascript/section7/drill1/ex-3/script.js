//Add timing information on how long it takes.

const {fibonacci} = require("../ex-1/script");

const inputNumber = parseInt(process.argv[2]);

if (isNaN(inputNumber) || inputNumber < 0)
    console.log('Please provide a valid positive number as an argument.');
else {
    const startTime = process.hrtime();
    const result = fibonacci(inputNumber);
    const elapsedTime = process.hrtime(startTime);
    const elapsedMilliseconds = elapsedTime[0] * 1000 + elapsedTime[1] / 1e6;
    console.log(`Fibonacci number at ${inputNumber} position:`, result);
    console.log(`Calculation time: ${elapsedMilliseconds.toFixed(3)} milliseconds`);
}
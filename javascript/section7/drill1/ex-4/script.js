//Use different fibonacci function (with recursion and caching)
//(fib1, fib2, fib3 functions) and time them.

function fib1(n) {
    if (n <= 1) {
      return n;
    }
    return fib1(n - 1) + fib1(n - 2);
}
  
const memo = {};
function fib2(n) {
    if (n <= 1) {
      return n;
    }
    if (!memo[n]) {
      memo[n] = fib2(n - 1, memo) + fib2(n - 2, memo);
    }
    return memo[n];
}

function fib3(n) {
    let a = 0;
    let b = 1;
    let temp;
  
    if (n === 0) {
      return a;
    }
  
    for (let i = 2; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
  
    return b;
}
  
const inputNumber = parseInt(process.argv[2]);
if (isNaN(inputNumber) || inputNumber < 0)
    console.log('Please provide a valid non-negative number as an argument.');
else {
    const startTime1 = process.hrtime();
    const result1 = fib1(inputNumber);
    const elapsedTime1 = process.hrtime(startTime1);
    const elapsedMilliseconds1 = elapsedTime1[0] * 1000 + elapsedTime1[1] / 1e6;

    const startTime2 = process.hrtime();
    const result2 = fib2(inputNumber);
    const elapsedTime2 = process.hrtime(startTime2);
    const elapsedMilliseconds2 = elapsedTime2[0] * 1000 + elapsedTime2[1] / 1e6;

    const startTime3 = process.hrtime();
    const result3 = fib3(inputNumber);
    const elapsedTime3 = process.hrtime(startTime3);
    const elapsedMilliseconds3 = elapsedTime3[0] * 1000 + elapsedTime3[1] / 1e6;

    console.log(`Result (fib1 - recursion without caching): ${result1}`);
    console.log(`Time taken (fib1): ${elapsedMilliseconds1.toFixed(3)} milliseconds\n`);
  
    console.log(`Result (fib2 - recursion with caching): ${result2}`);
    console.log(`Time taken (fib2): ${elapsedMilliseconds2.toFixed(3)} milliseconds\n`);
  
    console.log(`Result (fib3 - iteration): ${result3}`);
    console.log(`Time taken (fib3): ${elapsedMilliseconds3.toFixed(3)} milliseconds`);
}
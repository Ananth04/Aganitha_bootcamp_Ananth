//Write Fibonacci function (where fib(1) = 1 and fib(0)=1 and fib(n)=fib(n-1)+fib(n-2))

const fibonacci = n => {
    if(n == 0 || n == 1)
        return 1
    return fibonacci(n-1) + fibonacci(n-2);
};

module.exports = {fibonacci};
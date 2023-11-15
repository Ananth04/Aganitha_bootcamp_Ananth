//Write a function called memoize that takes a function (expensiveOperationFn) as an argument and returns a memoized version of it.
//The memoized function should cache the results of previous calls to avoid recomputation.

const memoize = (expensiveOperationFn) => {
    const cache = {};
  
    return (...args) => {
      const key = JSON.stringify(args);
      if (key in cache) {
        console.log("cached: ");
        return cache[key];
      } else {
        const result = expensiveOperationFn.apply(this, args);
        cache[key] = result;
        return result;
      }
    };
};

const expensiveOperation = (a, b) => {
    console.log('Running expensive operation...');
    return a + b;
};
  
const memoizedExpensiveOperation = memoize(expensiveOperation);

console.log(memoizedExpensiveOperation(5, 3));
console.log(memoizedExpensiveOperation(5, 3));
console.log(memoizedExpensiveOperation(2, 4));
console.log(memoizedExpensiveOperation(2, 4)); 
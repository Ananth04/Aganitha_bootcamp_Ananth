//Write a function called compose that takes two functions as arguments (f and g) 
//and returns a new function. The new function should be the composition of f and g,
//meaning that calling the new function with an argument x should be equivalent to calling f(g(x)).

const compose = (f, g) => x => f(g(x));

const double = x => x * 2;
const square = x => x * x;

const composedFunction = compose(double, square);
const result = composedFunction(3);

console.log(result);
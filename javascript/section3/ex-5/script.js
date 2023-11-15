//Write a function called curry that takes a binary function (additionFn) as an argument and returns a curried version of it.
//The curried function should allow partial application for addition.

const curry = binaryFn => {
    return function curried(a) {
        return function(b) {
            return binaryFn(a, b);
        };
    };
};

const additionFn = (a, b) => a + b;

const curriedAddition = curry(additionFn);
const add5 = curriedAddition(5);
const result = add5(5);

console.log(result);
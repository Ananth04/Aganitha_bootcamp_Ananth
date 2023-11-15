//import {add, sub, divide, multiply} from './mathOperations.js';
const func = require('./mathOperations');

console.log("Addition: " + func.add(1, 2));
console.log("Subtraction: " + func.sub(1, 2));
console.log("Multiplication: " + func.multiply(1, 2));
console.log("Division: " + func.divide(1, 2));
console.log("Division: " + func.divide(1, 0));
console.log("Square Root: " + func.squareRoot(-25));
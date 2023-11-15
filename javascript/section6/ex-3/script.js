//Inside a folder named utils, write a module called stringUtils that exports functions for string manipulation (e.g., reverseString, countCharacters).
//Import and use this local module in a separate script outside the utils folder.

const { reverseString, countCharacters } = require('./utils/stringUtils');

const inputString = "Hello, World!";

const reversedStr = reverseString(inputString);
console.log("Reversed String:", reversedStr);

const charCount = countCharacters(inputString);
console.log("Character Count:", charCount);
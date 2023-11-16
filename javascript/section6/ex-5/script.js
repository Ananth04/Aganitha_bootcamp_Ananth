//Create a simple JavaScript module and push it to a public Git repository.
//In another project, use this module by importing it directly from the Git repository.
//Demonstrate the ability to import modules directly from a remote Git source.

const func = require('modulejs');

console.log(func.stringReversal("hello"));
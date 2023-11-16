//Create a simple JavaScript module and push it to a public Git repository.
//In another project, use this module by importing it directly from the Git repository.
//Demonstrate the ability to import modules directly from a remote Git source.

const stringReversal = (str) => {
//let str = "aganitha";
//let arr = str.split('');
//arr.reverse();
[...str].reduce((reversed, character) => {
    //console.log(character+reversed);
    return character + reversed;}, "");
};

module.exports = {stringReversal};
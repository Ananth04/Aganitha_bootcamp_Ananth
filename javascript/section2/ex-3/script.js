//Given a string, reverse it without using the built-in reverse() method.

let str = "aganitha";
//let arr = str.split('');
//arr.reverse();
console.log([...str].reduce((reversed, character) => {
    //console.log(character+reversed);
    return character + reversed;}, ""));
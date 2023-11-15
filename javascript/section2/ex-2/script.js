//Take an array. Create two arrays -- one with even index elements, the other with the rest.

/*import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
rl.question('Enter elements of the array separated by spaces: ', (input) => {
    const input_arr = input.split(' ').map(Number);
});*/
let arr = [0,1,2,3,4,5,6,7,8];

function splitArrayWithFilter(arr) {
    const evenIndexArray = arr.filter((_, index) => index % 2 === 0);
    const oddIndexArray = arr.filter((_, index) => index % 2 !== 0);

    return [evenIndexArray, oddIndexArray];
}

const [evenIndexArray, oddIndexArray] = splitArrayWithFilter(arr);

console.log("Original Array:", arr);
console.log("Elements at even indices:", evenIndexArray);
console.log("Elements at odd indices:", oddIndexArray);

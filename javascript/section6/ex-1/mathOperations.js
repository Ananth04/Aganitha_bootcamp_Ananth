const add = (a,b) => a + b;
const sub = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => {
    if(b===0){
        console.error('Division by zero not allowed');
        return;
    }
    return a/b;
};

module.exports = {add, sub, multiply, divide};

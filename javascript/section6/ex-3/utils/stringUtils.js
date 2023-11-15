function reverseString(str) {
    return str.split('').reverse().join('');
}

function countCharacters(str) {
    return str.length;
}

module.exports = {
    reverseString,
    countCharacters
};
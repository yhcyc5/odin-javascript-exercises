const reverseString = function(str) {
    let length = str.length;
    let output = '';
    for (let i = length-1; i >= 0; i--) {
        output += str[i];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;

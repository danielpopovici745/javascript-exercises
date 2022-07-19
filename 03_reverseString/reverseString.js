const reverseString = function(string) {
    const array = string.split('');
    let reverse = array.reverse();
    return reverse.join('');
};

// Do not edit below this line
module.exports = reverseString;

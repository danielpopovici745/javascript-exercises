const palindromes = function (str) {
    const onlyLettersArray = str
        .toLowerCase()
        .split('')
        .filter(char => /[a-zA-Z]/.test(char));
    console.log(onlyLettersArray);
    let onlyLettersString = onlyLettersArray.join('');
    const reversed = onlyLettersArray.reverse();
    console.log(reversed);
    let newStr = reversed.join('');
    return newStr.includes(onlyLettersString);
};

// Do not edit below this line
module.exports = palindromes;

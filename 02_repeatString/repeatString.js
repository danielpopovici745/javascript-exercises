const repeatString = function(word,repeat) {
    if (repeat <0){
        return 'ERROR';
    }
    for(let i = 0; i <= repeat;i++){
        return word.repeat(repeat)
    }
    
};

// Do not edit below this line
module.exports = repeatString;

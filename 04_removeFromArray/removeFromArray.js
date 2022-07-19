const removeFromArray = function(array, ...values) {
    for(let i = 0; i<values.length;i++){
        if(array.includes(values[i])){
            const index = array.indexOf(values[i]);
            array.splice(index,1);
        }
    }
    return array;
    
    // return array.filter(val => !values.includes(val));
}
    
    //both above are the same but the commented code is much faster and more efficient


// Do not edit below this line
module.exports = removeFromArray;

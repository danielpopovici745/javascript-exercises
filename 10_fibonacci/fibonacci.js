const fibonacci = function(element) {
    if (element <0) return "OOPS"
    if(typeof element === 'string'){
        element = parseInt(element);
    }
    let n1 = 1;
    let n2= 1;
    let sum;
    for(let i = 1; i<element;i++){
        sum = n1 + n2;
        n1 = n2;
        n2 = sum;
    }
    return n1;

    //can also use Binet's Fibonacci Number Formula
};

// Do not edit below this line
module.exports = fibonacci;

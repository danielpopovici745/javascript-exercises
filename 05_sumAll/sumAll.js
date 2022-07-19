const sumAll = function(...args) {
    let sum = 0;
    const negativeNumber = args.filter(val => Math.sign(val) < 0);
    const notANumber = args.filter(val => typeof(val) !== 'number');
    if(negativeNumber.length >0 || notANumber.length >0){
        return 'ERROR';
    }
    else{
        if(args[0] > args[1]){
            args.reverse();
        }
        for(let i = args[0];i <=args[1];i++){
            sum += i;
        }
        return sum;
    }

    
    
};

// Do not edit below this line
module.exports = sumAll;

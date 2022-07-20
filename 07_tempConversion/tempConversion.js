const ftoc = function(fahrenheit) {
  let conversion = 5 * (fahrenheit - 32) / 9;
  if (conversion % 1 != 0){
      return parseFloat(conversion.toFixed(1));
  }
  else{
    return conversion;
  }
  
};

const ctof = function(celsius) {
  let conversion = celsius * 9 / 5 + 32;
  if (conversion % 1 != 0){
    return parseFloat(conversion.toFixed(1));
  }
  else{
    return conversion;
  }

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

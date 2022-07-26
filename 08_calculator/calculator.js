const add = function(num1,num2) {
  return num1+num2;
	
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let total = 0;
	arr.forEach(item => total += item);
  return total;
};

const multiply = function(arr) {
  let total = 1;
  arr.forEach(item => total *= item );
  return total;
};

const power = function(num1,num2) {
	return Math.pow(num1,num2);
};

const factorial = function(num) {
  let facto = 1;
  if (num <=1){
    return facto;
  }
  for (;num >1; num--){
    facto *= num;
  }
  return facto;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

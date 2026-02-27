const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce( (sum, current) => (sum + current), 0);
};

const multiply = function(arr) {
  return arr.reduce( (sum,item) => (sum * item), 1);
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(a) {
  let answer = a;
  if(a == 0){
    return 1;
  }
  else{
    for (let i=1; i<a; i++){
      answer *= i;
    }
  }
  return answer;
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

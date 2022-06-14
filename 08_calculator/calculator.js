const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(arr) {
  var total = 0;
  for (var i = 0;i < arr.length; i++){
    total += arr[i];
  }
  return total;
};

const multiply = function(arr) {
  var total = arr[0];
  for (var i = 1; i < arr.length; i++){
    total = total * arr[i];
  }
  return total;
};

const power = function(x,n) {
	return x ** n;
};

const factorial = function(n) {
	var fact = 1;
  for (var i = 0; i <= n; i++){
    if (i === 0){
      continue;
    } else {
      fact *= i;
    }
  }
  return fact;
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

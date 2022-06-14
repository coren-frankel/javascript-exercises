const ftoc = function(far) {
  var num = (far - 32) * (5/9);
  return Math.round(num * 10)/10;
};

const ctof = function(cel) {
  var num = (cel * (9/5)) + 32;
  return Math.round(num * 10)/10;  
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

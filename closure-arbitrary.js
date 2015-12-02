function multiplier(factor) {
  var local = factor;
  return function (number) {
    return number * local;
  };
}
var twice = multiplier(2);
console.log(twice(5));
console.log(twice(6));

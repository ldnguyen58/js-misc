var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce(function(a1, a2) {
  return a1.concat(a2);
}))

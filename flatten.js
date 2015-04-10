var arrays = [[1, 2, 3], [4, 5], [6]];

var flat = arrays.reduce(function(prev, curr) {
  return prev.concat(curr);
});

console.log(flat);

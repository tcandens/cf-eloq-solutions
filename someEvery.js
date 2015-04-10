function every(array, test) {
  var bool;
  for ( var i = 0; i <= array.length; i++ ) {
    if ( test(array[i]) == false ) {
      bool = false;
      break;
    } else if ( test(array[i]) == true ){
      bool = true;
    }
  }
  return bool;
}

function some(array, test) {
  for ( var i = 0; i < array.length; i++ ) {
    if ( test(array[i]) ) {
      return true;
      break;
    } else {
      return false;
    }
  }
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false

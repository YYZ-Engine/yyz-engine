// Generates a random single digit hexadecimal character
const get_random_character = () => {
	var chars = '0123456789ABCDEFabcdef';
  var randomNum = Math.floor(Math.random() * chars.length);
  var randomChar = chars.substring(randomNum,randomNum+1);
  return randomChar
}

/*
Creates a randomly generated matrix of single digit hexadecimal
characters (as strings) by passing x and y coordinates of the matrix.
*/

var result = [];
const create = (x,y) => {
  var result = [];
  var x_coord = 0;
  var y_coord = 0;
  var inner_arr = [];
  while (x_coord < x ) { 
    result.push(inner_arr);
    while (y_coord < y) {
      inner_arr.push(get_random_character());
      y_coord ++
    }
    x_coord ++
  }
  return result;
}

// Takes a matrix as argument an switches the x and y axis on it. 
const transpose = (arr) => {
  var y = arr[0].length;
  var diff = arr.length - y;
  // if the inner arr length is greater than the outer array length, push an array to the outer array
  if (diff < 0) {
    arr.push([]);
  }
  // loop through the inner and outer arrays
  // flip x with arr[j][i] 
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j<i; j++) {
      var x;
      x = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = x
    }
  }
  // remove undefined values from the inner arrays
  for (var i=0; i <arr.length; i++) {
    arr[i] = arr[i].filter(function(n){ 
      return n !== undefined
    }) 
  }
  // remove the empty arrays from the matrix
  arr = arr.filter(function(n){ 
    return n.length > 0
  })
  return arr; 
}

module.exports = {
  get_random_character: get_random_character,
  create: create,
  transpose: transpose
}

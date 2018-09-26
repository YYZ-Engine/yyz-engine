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
const matrix_create = (x,y) => {
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
  console.log(result);
  return result;
}

// Takes a matrix as argument an switches the x and y axis on it. 
const matrix_transpose = (arr) => {
  if (arr.length !== arr[0].length) {
    for (var i=0; i < Math.abs(arr.length - arr[0].length); i++) {
      arr.push([]);
    }
  }

  for (var i=0; i < arr.length; i++) {
    for (var j=0; j<i; j++) {
      var x;
      var y;
      x = arr[i][j];
      y = arr[j][i];
      if ( x === null || y === null) {
        arr.splice(x)
        arr.splice(y)
      }
      arr[i][j] = y;
      arr[j][i] = x;
      console.log("Flip ["+i+"]["+j+"] ("+x+") with ["+j+"]["+i+"] ("+y+")")
    }
  }

  console.log(arr); 
  return arr; 
}

module.exports = {
  get_random_character: get_random_character,
  matrix_create: matrix_create,
  matrix_transpose: matrix_transpose
}

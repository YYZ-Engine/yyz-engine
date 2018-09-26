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
  while (x_coord < x && y_coord < y) {
    result.push([get_random_character(), get_random_character()]);
    y_coord ++
    x_coord ++
  }
  return result;
}

// Takes a matrix as argument an switches the x and y axis on it. 
const matrix_transpose = (arr) => {
  // return [[arr[0][0], arr[1][0]], [arr[0][1], arr[1][1]]];
  /* flipping x and y for 2x2 => 2x2
    0,0 => 0,0
    0,1 => 1,0
    0,2 => 2,0
    1,0 => 0,1
    1,1 => 1,1
    1,2 => 2,1
    2,0 => 0,2
    2,1 => 1,2
    2,2 => 2,2
    
    flipping x and y for 3x2 => 2x3
    0,0 => 0,0
    0,1 => 1,0
    0,2 => 2,0
    1,0 => 0,1
    1,1 => 2,1
    1,2 => 1,1
    
  */
  console.log(arr.length); 
  for (var i=0; i<arr.length-1; i++) {
    for (var j=1; j<arr.length; j++) {
      var x;
      var y;
      x = arr[i][j];
      y = arr[j][i];
      console.log(x, ", ", y)
      arr[i][j] = y;
      arr[j][i] = x;
      console.log(arr[i][j], ", ", arr[j][i])
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

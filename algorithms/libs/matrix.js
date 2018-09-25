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
const matrix_flip = (arr) => {
  return [[arr[0][0], arr[1][0]], [arr[0][1], arr[1][1]]];
}

module.exports = {
  get_random_character: get_random_character,
  matrix_create: matrix_create,
  matrix_flip: matrix_flip
}

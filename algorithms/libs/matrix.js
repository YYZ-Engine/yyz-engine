/* 
Creates a randomly generated matrix of single digit hexadecimal 
characters (as strings) by passing x and y coordinates of the matrix. 
*/

const matrix_create = (x,y) => {
  var result = [];
  
  return result;
}

// Takes a matrix as argument an switches the x and y axis on it. 
const matrix_flip = (arr) => {
  return [[arr[0][0], arr[1][0]], [arr[0][1], arr[1][1]]];
}

module.exports = {
  matrix_create: matrix_create,
  matrix_flip: matrix_flip
}

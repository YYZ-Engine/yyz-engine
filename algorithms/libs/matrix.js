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

const transpose = (arr) => {
  return arr.reduce((prev, next) => next.map((item, i) =>
    (prev[i] || []).concat(next[i])
  ), []);
}

module.exports = {
  get_random_character: get_random_character,
  create: create,
  transpose: transpose
}

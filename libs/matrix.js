// Generates a random single digit hexadecimal character
const get_random_character = () => {
	var chars = '0123456789ABCDEFabcdef';
	var randomNum = Math.floor(Math.random() * chars.length);
	var randomChar = chars.substring(randomNum,randomNum+1);
	return randomChar;
};

/*
Creates a randomly generated matrix of single digit hexadecimal
characters (as strings) by passing x and y coordinates of the matrix.
*/

const create = (x,y) => {
	var result = [];
	var x_coord = 0;
	var y_coord = 0;
	var inner_arr = [];
	// loop while x_coord is less than # of rows
	while (x_coord < x ) { 
		result.push(inner_arr);
		// loop while y_coord is less than # of columns
		while (y_coord < y) {
			inner_arr.push(get_random_character());
			y_coord ++;
		}
		x_coord ++;
	}
	return result;
};

const transpose = (arr) => {
	// set accumulator value to empty array
	// track prev and next array
	return arr.reduce((prev, next) =>
	// call the provided  callback funcction once
	// for each value and index in order
		next.map((value, index) =>
		// get prev[i] value or empty array if prev doesn't exist
		// concatenate that value/array with next[index]
			(prev[index] || []).concat(next[index])
		), []);
	// returns single output of transposed array 
};

module.exports = {
	get_random_character: get_random_character,
	create: create,
	transpose: transpose
};

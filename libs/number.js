// Write a function that retrieves the maximum value of a given array.
const find_max = (array) => {
	return array.reduce(function (i, j) {
		if (i > j) {
			return i;
		} else {
			return j; 
		}
	});
};

// Write a function that retrieves the minimum value of a given array.
const find_min = (array) => {
	return array.reduce(function (i, j) {
		if (i < j) {
			return i;
		} else {
			return j;
		}
	});
};

// Write a function that retrieves the maximum and minimum value of a given array.
const find_max_min = (array) => {
	var max = find_max(array);
	var min = find_min(array);
	return [max, min];
};

// Write a function that takes an integer n in; it should return n*(n-1)(n-2)...21. Assume n >= 0.
// As a special case, factorial(0) == 1.

const factorial = (number) => {
	if (number === 0) return 1;
	var result = 1;
	while ( number > 1) {
		result *= number;
		number --; 
	}
	return result;
};

module.exports = {
	find_max: find_max,
	find_min: find_min,
	find_max_min: find_max_min,
	factorial: factorial
};

// Write a function that detects if the input is a palindrome or not.

const is_palindrome = (string) => {
	var half = string.length/2;
	for (var i=0; i < half; i++) {
		var first = string[i];
		var last = string[string.length-1-i];
		if (first === last) return true;
		return false;
	}
};

module.exports = {
	is_palindrome: is_palindrome,
};

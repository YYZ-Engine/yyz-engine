// Write a function that detects if the input is a palindrome or not.

const is_palindrome = (string) => {
  var half = string.length/2
  var length = string.length
  for (var i=0; i < half; i++) {
    var first = string[i];
    var j = string.length
    var last = string[j-1-i];
    if (first === last) {
      return true
    } else {
      return false
    }
  }
}

module.exports = {
  is_palindrome: is_palindrome,
}

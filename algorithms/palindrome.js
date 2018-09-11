// Write a function that detects if the input is a palindrome or not.

function is_palindrome(string) {
  // if the string length is even, check if the first half is equal to the second half
  var halfLength = string.length/2
  if (string.length % 2 == 0) {
    return string.substring(0, halfLength) == (string.substring(halfLength, string.length)).split('').reverse().join('');
  } else {  
    // if the string length is odd, check if the first half is equal to the second half (not including the middle character)
    return string.substring(0, Math.floor(halfLength)) == (string.substring((Math.floor(halfLength)+1), string.length)).split('').reverse().join('');
  }
}

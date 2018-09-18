// Write a method that will take a string as input, and return the string  with the letters in reverse order.
// Do not create a new string
// Capital letters should remain capital letters

// This works but wouldn't be ideal for long strings 
const reverse = (string) => {
  if (string === '') return string; 
  return reverse(string.substr(1)) + string[0];
}

// Write a method that takes an input string, reverses it in place. Don't write a recursive function

const reverse_in_place = (string) => {
  if (string === '') return string;
  return string.split('').reverse().join('');
}
module.exports = {
  reverse: reverse,
  reverse_in_place: reverse_in_place
}

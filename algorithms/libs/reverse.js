// Write a method that will take a string as input, and return the string  with the letters in reverse order.
// Do not create a new string
// Capital letters should remain capital letters

const reverse = (string) => {
  if (string === '') return string; 
  return reverse(string.substr(1)) + string[0];
}

module.exports = {
  reverse: reverse
}

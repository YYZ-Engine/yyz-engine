// Write a method that will take a string as input, and return a new string with the same letters in reverse order.

const reverse = (string) => {
  var new_string = '';
  for (var i = string.length-1; i >= 0; i--) {
    new_string += string[i]
  }
  return new_string
}

module.exports = {
  reverse: reverse,
}

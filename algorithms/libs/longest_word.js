// Write a method that takes in a string. Return the longest word in the string.

const longest_word = (string) => {
  var words = string.split(' ');
  for (var i = 0; i < words.length; i++) {
    var longest_word;
    var current_word = words[i]
    if (longest_word == null) {
      longest_word = current_word
    } else if (longest_word.length <= current_word.length) {
      longest_word = current_word
    } 
  }
  return longest_word
}

module.exports = {
  longest_word: longest_word,
}

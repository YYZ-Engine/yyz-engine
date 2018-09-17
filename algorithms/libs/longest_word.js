// Write a method that takes in a string. Return the longest word in the string.

const longest_word = (string) => {
  var words = string.split(' ');
  var longest_word = '';
  for (var i in words) {
    if (longest_word === '') {
      longest_word = words[i]
    } else if (longest_word.length <= words[i].length) {
      longest_word = words[i]
    }
  }
  return longest_word
}

module.exports = {
  longest_word: longest_word,
}

// Write a method that takes in a string. Return the longest word in the string.

const find_longest_word = (string) => {
  var words = string.split(' ');
  var longest_word = '';
  for (var i in words) {
    if (longest_word.length <= words[i].length) {
      longest_word = words[i]
    }
  }
  return longest_word
}

module.exports = {
  find_longest_word: find_longest_word,
}

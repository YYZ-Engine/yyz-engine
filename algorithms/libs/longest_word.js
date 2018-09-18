// Write a method that takes in a string. Return the longest word in the string.
// Parse the string to that all punctuation marks are removed
// Make any word with hyphens just one word

const find_longest_word = (string) => {
  // remove punctuation marks in the string and split it by one space
  var words = string.replace(/[^\w\s]|_/g,'').split(' ');
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

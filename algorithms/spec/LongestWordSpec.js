const longest_word = require('../libs/longest_word');

describe('finds the longest word in the input string', () => {
  var string = '';
  it('checks if "goodbye" is the longest word in "hello goodbye"', () => {
    string = 'hello goodbye'
    expect(longest_word.find_longest_word(string)).toEqual('goodbye');
  });
  it('checks if "wingardium" is a longest word in "wingardium leviosa"', () => {
    string = 'wingardium leviosa'
    expect(longest_word.find_longest_word(string)).toEqual('wingardium');
  });
  it('checks if "ending" is the longest word in "this is not a happy ending"', () => {
    string = 'this is not a happy ending'
    expect(longest_word.find_longest_word(string)).toEqual('ending');
  });
  it('checks if "" is a the longest word in ""', () => {
    string = ''
    expect(longest_word.find_longest_word(string)).toEqual('');
  });
  it('checks if "12345" is a the longest word in "0 12345 67 8910"', () => {
    string = '0 12345 67 8910'
    expect(longest_word.find_longest_word(string)).toEqual('12345');
  });
   it('checks if "def" is a the longest word in "abc def"', () => {
    string = 'abc def'
    expect(longest_word.find_longest_word(string)).toEqual('def');
  });
});

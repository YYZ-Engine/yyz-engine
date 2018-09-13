const palindrome = require('../libs/palindrome');

describe('checks if input is a palindrome', () => {
  var string = '';
  it('checks if "mom" is a palindrome', () => {
    string = 'mom'
    expect(palindrome.is_palindrome(string)).toBe(true);
  });
  it('checks if "abba" is a palindrome', () => {
    string = 'abba'
    expect(palindrome.is_palindrome(string)).toBe(true);
  });
  it('checks if "helloworld" is a palindrome', () => {
    string = 'helloworld'
    expect(palindrome.is_palindrome(string)).toBe(false);
  });
  it('checks if "hello olleh" is a palindrome', () => {
    string = 'hello olleh'
    expect(palindrome.is_palindrome(string)).toBe(true);
  });
});

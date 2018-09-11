const is_palindrome = require('../libs/palindrome');

it('checks if `mom` is a palindrome', is_palindrome('mom') {
  expect(is_palindrome('mom')).toBe(true);
});
it('checks if `abba` is a palindrome', is_palindrome('abba') {
  expect(is_palindrome('abba')).toBe(true);
});
it('checks if `beereb` is a palindrome', is_palindrome('beereb') {
  expect(is_palindrome('beereb')).toBe(false);;
});
it('checks if `hello olleh` is a palindrome', is_palindrome('hello olleh') {
  expect(is_palindrome('hello olleh')).toBe(true);
});
it('checks if `good morning` is a palindrome', is_palindrome('good morning') {
  expect(is_palindrome('good morning')).toBe(false);
});

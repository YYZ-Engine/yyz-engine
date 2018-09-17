const reverse = require('../libs/reverse');

describe('checks if output is input reversed', () => {
  var string = '';
  it('checks if "mom" is "mom" reversed', () => {
    string = 'mom'
    expect(reverse.reverse(string)).toBe('mom');
  });
  it('checks if "abba" is "abba" reversed', () => {
    string = 'abba'
    expect(reverse.reverse(string)).toBe('abba');
  });
  it('checks if "lottery" is "yrettol" reversed', () => {
    string = 'lottery'
    expect(reverse.reverse(string)).toBe('yrettol');
  });
  it('checks if "hello olleh" is "hello olleh" reversed', () => {
    string = 'hello olleh'
    expect(reverse.reverse(string)).toBe('hello olleh');
  });
  it('checks if "" is "" reversed', () => {
    string = ''
    expect(reverse.reverse(string)).toBe('');
  });
  it('checks if "123" is "321" reversed', () => {
    string = '123'
    expect(reverse.reverse(string)).toBe('321');
  });
});

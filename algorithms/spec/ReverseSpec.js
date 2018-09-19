const reverse = require('../libs/reverse');

describe('reverse method', () => {
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
  it('checks if "HellO olleh" is "hello OlleH" reversed', () => {
    string = 'hello OlleH'
    expect(reverse.reverse(string)).toBe('HellO olleh');
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

describe('reverse_in_place', () => {
  var string = '';
  it('checks if "mom" is "mom" reversed', () => {
    string = 'mom'
    expect(reverse.reverse_in_place(string)).toBe('mom');
  });
  it('checks if "abba" is "abba" reversed', () => {
    string = 'abba'
    expect(reverse.reverse_in_place(string)).toBe('abba');
  });
  it('checks if "dog" is "god" reversed', () => {
    string = 'god'
    expect(reverse.reverse_in_place(string)).toBe('dog');
  });
  it('checks if "hello world" is "dlrow olleh" reversed', () => {
    string = 'hello world'
    expect(reverse.reverse_in_place(string)).toBe('dlrow olleh');
  });
  it('checks if "lOttErY" is "YrEttOl" reversed', () => {
    string = 'YrEttOl'
    expect(reverse.reverse_in_place(string)).toBe('lOttErY');
  });
  it('checks if "DLroW ollEh" is "hEllo WorLD" reversed', () => {
    string = 'hEllo WorLD'
    expect(reverse.reverse_in_place(string)).toBe('DLroW ollEh');
  });
  it('checks if "" is "" reversed', () => {
    string = ''
    expect(reverse.reverse_in_place(string)).toBe('');
  });
  it('checks if "123" is "321" reversed', () => {
    string = '123'
    expect(reverse.reverse_in_place(string)).toBe('321');
  });
});

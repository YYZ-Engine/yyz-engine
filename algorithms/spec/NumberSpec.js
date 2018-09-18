const number = require('../libs/number');

describe('finds the maximum and minimum value of an array', () => {
  var array = [];
  it('checks if 123 and 45 are the max and min value of an array [123,9,23,45,89]', () => {
    array = [123,9,23,45,89]
    expect(number.find_max_min(array)).toBe([123,45]);
  });
});

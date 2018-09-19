const array = require('../libs/array');

describe('find_duplicate_values method', () => {
  var array = [];
  it('checks if [10,0] are the duplicate values in [10,0,-5,10,b,0,a]', () => {
    array = [10,0,-5,10,b,0,a]
    expect(array.find_duplicate_values(array)).toBe([10, 0]);
  });
  it('checks if [d,o,g] are the duplicate values in [d,2,4,o,6,d,o,g,9,g,+]', () => {
    array = [d,2,4,o,6,d,o,g,9,g,+]
    expect(array.find_duplicate_values(array)).toBe([d, o, g]);
  });
  it('checks if [C,a,b] are the duplicate values in [d,2,4,o,6,C,a,9,C,c,b,a,g,b,+]', () => {
    array = [d,2,4,o,6,C,a,9,C,c,b,a,g,b,+]
    expect(array.find_duplicate_values(array)).toBe([C, a, b]);
  }); 
});

const arrays = require('../libs/arrays');

describe('find_duplicate_values method', () => {
  var arr = [];
  it('checks if [10,0] are the duplicate values in [10,0,-5,10,b,0,a]', () => {
    arr = [10,0,-5,10,'b',0,'a']
    expect(arrays.find_duplicate_values(arr)).toBe([10, 0]);
  });
  it('checks if [d,o,g] are the duplicate values in [d,2,4,o,6,d,o,g,9,g,+]', () => {
    arr = ['d',2,4,'o',6,'d','o','g',9,'g','+']
    expect(arrays.find_duplicate_values(arr)).toBe(['d', 'o', 'g']);
  });
  it('checks if [C,a,b] are the duplicate values in [d,2,4,o,6,C,a,9,C,c,b,a,g,b,+]', () => {
    arr = ['d',2,4,'o',6,'C','a',9,'C','c','b','a','g','b','+']
    expect(arrays.find_duplicate_values(arr)).toBe(['C', 'a', 'b']);
  }); 
});

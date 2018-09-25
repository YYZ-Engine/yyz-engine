const arrays = require('../libs/arrays');

describe('find_duplicate_values method', () => {
  var input = [];
  var result = [];
  it('checks if [10,0] are the duplicate values in [10,0,-5,10,b,0,a]', () => {
    input = [10,0,-5,10,'b',0,'a'];
    result = [10,0];
    expect(arrays.find_duplicate_values(input)).toEqual(result);
  });
  it('checks if [d,o,g] are the duplicate values in [d,2,4,o,6,d,o,g,9,g,+]', () => {
    input = ['d',2,4,'o',6,'d','o','g',9,'g','+'];
    result = ['d','o','g'];
    expect(arrays.find_duplicate_values(input)).toEqual(result);
  });
  it('checks if [C,a,b] are the duplicate values in [d,2,4,o,6,C,a,9,C,c,b,a,g,b,+]', () => {
    input = ['d',2,4,'o',6,'C','a',9,'C','c','b','a','g','b','+'];
    result=['C','a','b'];
    expect(arrays.find_duplicate_values(input)).toEqual(result);
  }); 
});

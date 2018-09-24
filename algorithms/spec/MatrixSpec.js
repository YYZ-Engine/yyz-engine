const matrix = require('../libs/matrix');

describe('matrix_create', () => {
  var x;
  var y;
  var result;
  it('checks if matrix_create(2,2) is [["a", "b"], ["1", "2"]]', () => {
    x = 2;
    y = 2;
    result = [["a", "b"], ["1", "2"]];
    expect(matrix.matrix_create(x,y)).toBe(result);
  });
});

describe('matrix_flip', () => {
  var arr = [];
  var result = [];
  it('checks if [["a", "1"], ["b", "2"]] is [["a", "b"], ["1", "2"]] flipped', () => {
    arr = [["a", "b"], ["1", "2"]];
    result = [["a", "1"], ["b", "2"]]
    expect(matrix.matrix_flip(arr)).toEqual(result);
  });
});

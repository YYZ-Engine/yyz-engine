const matrix = require('../libs/matrix');

describe('matrix_create', () => {
  it('checks if matrix_create(2,2) creates a 2D array', () => {
    var x = 2;
    var y = 2;
    expect(matrix.matrix_create(x,y).length).toBe(2);
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

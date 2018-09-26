const matrix = require('../libs/matrix');

describe('matrix_create', () => {
  it('checks if matrix_create(2,2) creates a 2D array', () => {
    var x = 2;
    var y = 2;
    expect(matrix.matrix_create(x,y).length).toBe(2);
  });
});

describe('matrix_transpose', () => {
  var arr = [];
  var result = [];
  it('checks if [["a", "1"], ["b", "2"]] is [["a", "b"], ["1", "2"]] transposed', () => {
    arr = [["a", "b"], ["1", "2"]];
    result = [["a", "1"], ["b", "2"]];
    expect(matrix.matrix_transpose(arr)).toEqual(result);
  });
  it('checks if [["1", "2", "3"], ["4","5","6"], ["7", "8", "9"]] is [["1","4","7"], ["2","5","8"], ["3","6","9"]] transposed', () => {
    arr = [["1", "2", "3"], ["4","5","6"], ["7", "8", "9"]];
    result = [["1","4","7"],["2","5","8"],["3","6","9"]];
    expect(matrix.matrix_transpose(arr)).toEqual(result);
  });
  it('checks if [["1", "2", "3", "4"], ["5","6","7","8"], ["9", "10", "11", "12"], ["13", "14", "15", "16"]] is [["1","5","9", "13"], ["2","6","10", "14"], ["3","7","11", "15"],["4","8","12","16"]] transposed', () => {
    arr = [["1", "2", "3", "4"], ["5","6","7","8"], ["9", "10", "11", "12"], ["13", "14", "15", "16"]];
    result = [["1","5","9", "13"], ["2","6","10", "14"], ["3","7","11", "15"],["4","8","12","16"]];
    expect(matrix.matrix_transpose(arr)).toEqual(result);
  });

  it('checks if [["1", "2", "3"], ["4","5","6"]] is [["1","4"],["2","5"],["3","6"]] transposed', () => {
    arr = [["1", "2", "3"], ["4","5","6"]];
    result = [["1","4"],["2","5"],["3","6"]];
    expect(matrix.matrix_transpose(arr)).toEqual(result);
  });
});

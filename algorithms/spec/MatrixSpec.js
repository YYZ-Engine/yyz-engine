const matrix = require('../libs/matrix');

describe('matrix.create', () => {
  it('checks if create(2,2) creates a matrix', () => {
    var x = 2;
    var y = 2;
    var new_arr = matrix.create(x,y);
    for (var i = 0; i < new_arr.length; i++) {
      var hasChars = new_arr[i].every(value => ('0123456789ABCDEFabcdef').includes(value));
    }
    expect(hasChars).toBe(true);
    expect(new_arr.length).toBe(x);
    expect(new_arr[0].length).toBe(y);
  });
  it('checks if create(3,2) creates a matrix', () => {
    var x = 3;
    var y = 2;
    var new_arr = matrix.create(x,y);
    for (var i = 0; i < new_arr.length; i++) {
      var hasChars = new_arr[i].every(value => ('0123456789ABCDEFabcdef').includes(value));
    }
    expect(hasChars).toBe(true);
    expect(new_arr.length).toBe(x);
    expect(new_arr[0].length).toBe(y);
  });
  it('checks if create(2,3) creates a matrix', () => {
    var x = 2;
    var y = 3;
    var new_arr = matrix.create(x,y);
    for (var i = 0; i < new_arr.length; i++) {
      var hasChars = new_arr[i].every(value => ('0123456789ABCDEFabcdef').includes(value));
    }
    expect(hasChars).toBe(true);
    expect(new_arr.length).toBe(x);
    expect(new_arr[0].length).toBe(y);
  });
});

describe('matrix.transpose', () => {
  var arr = [];
  var new_arr = [];
  it('checks if [["a", "1"], ["b", "2"]] is [["a", "b"], ["1", "2"]] transposed', () => {
    arr = [["a", "b"], ["1", "2"]];
    new_arr = [["a", "1"], ["b", "2"]];
    expect(matrix.transpose(arr)).toEqual(new_arr);
  });
  it('checks if [["1", "2", "3"], ["4","5","6"], ["7", "8", "9"]] is [["1","4","7"], ["2","5","8"], ["3","6","9"]] transposed', () => {
    arr = [["1", "2", "3"], ["4","5","6"], ["7", "8", "9"]];
    new_arr = [["1","4","7"],["2","5","8"],["3","6","9"]];
    expect(matrix.transpose(arr)).toEqual(new_arr);
  });
  it('checks if [["1", "2", "3", "4"], ["5","6","7","8"], ["9", "10", "11", "12"], ["13", "14", "15", "16"]] is [["1","5","9", "13"], ["2","6","10", "14"], ["3","7","11", "15"],["4","8","12","16"]] transposed', () => {
    arr = [["1", "2", "3", "4"], ["5","6","7","8"], ["9", "10", "11", "12"], ["13", "14", "15", "16"]];
    new_arr = [["1","5","9", "13"], ["2","6","10", "14"], ["3","7","11", "15"],["4","8","12","16"]];
    expect(matrix.transpose(arr)).toEqual(new_arr);
  });
  it('checks if [["1","4"],["2","5"],["3","6"]] transposed is: [["1", "2", "3"], ["4","5","6"]]', ()=> {
    arr = [["1","4"],["2","5"],["3","6"]];
    new_arr = [["1", "2", "3"], ["4","5","6"]]
    expect(matrix.transpose(arr)).toEqual(new_arr);
  });
  it('checks if [["1", "2", "3"], ["4","5","6"]] is [["1","4"],["2","5"],["3","6"]] transposed', () => {
    arr = [["1", "2", "3"], ["4","5","6"]];
    new_arr = [["1","4"],["2","5"],["3","6"]];
    expect(matrix.transpose(arr)).toEqual(new_arr);
  });
});

describe('matrixcreate & matrix.transpose functions combined: ', () => {
  var arr = matrix.create(3,2);
  it('checks if it creates a matrix and can transpose the matrix', () => {
    for (var i = 0; i < arr.length; i++) {
      var hasChars = arr[i].every(value => ('0123456789ABCDEFabcdef').includes(value));
    }
    expect(hasChars).toBe(true);
    expect(arr.length).toBe(3);
    expect(arr[0].length).toBe(2);
    var transposed = matrix.transpose(arr);
    for (var i = 0; i < transposed.length; i++) {
      var hasChars = transposed[i].every(value => ('0123456789ABCDEFabcdef').includes(value));
    }
    expect(transposed.length).toBe(2);
    expect(transposed[0].length).toBe(3);
    expect(hasChars).toBe(true);
  });
});

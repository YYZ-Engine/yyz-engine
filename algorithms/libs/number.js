// Write a function that retrieves the maximum value of a given array.
const find_max = (array) => {
  return array.reduce(function (i, j) {
    if (i > j) {
      return i
    } else {
      return j 
    }
  });
}

// Write a function that retrieves the minimum value of a given array.
const find_min = (array) => {
  return array.reduce(function (i, j) {
    if (i < j) {
      return i
    } else {
      return j
    }
  });
}

// Write a function that retrieves the maximum and minimum value of a given array.
const find_max_min = (array) => {
  var max = find_max(array);
  var min = find_min(array);
  return [max, min]
}

module.exports = {
  find_max: find_max,
  find_min: find_min,
  find_max_min: find_max_min,
}

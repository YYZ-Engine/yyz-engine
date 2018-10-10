const isNumeric = (n) => { 
  return !isNaN(parseFloat(n)) && isFinite(n); 
}

// Write a function that finds duplicate values of a given array.

const find_duplicate_values = (array) => {
  var dup_values = {};
  var result = [];

  // assign the count of array element to dup_values[element] 
  for (var element of array) {
    // if the value is a number, increment the count and assign it to the key
    // otherwise, assign the key to a value of 1
    dup_values[element] = isNumeric(dup_values[element]) ? dup_values[element] + 1 : 1;

    // find the values greater than 1 and push to the result array
    if (dup_values[element] > 1) { result.push(element) }
  }

  return result;
}

module.exports = {
  isNumeric: isNumeric,
  find_duplicate_values: find_duplicate_values
}

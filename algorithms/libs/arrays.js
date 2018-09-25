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
    if (isNumeric(dup_values[element])) { 
      dup_values[element] ++; 
    } else { // if the value is not a number, assign key to a value of 1
      dup_values[element] = 1; 
    }
  }

  // find the values greater than 1 and push to the result array
  for (var prop in dup_values) {
    if (dup_values[prop] > 1) {
      if (isNumeric(prop)) { 
        result.push(parseFloat(prop))
      } else {
        result.push(prop)
      }
    }
  }
  return result;
}

module.exports = {
  isNumeric: isNumeric,
  find_duplicate_values: find_duplicate_values
}

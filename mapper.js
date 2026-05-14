// Recreates Array.prototype.map() behavior
function map(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      result[i] = callback(arr[i], i, arr);
    }
  }
  return result;
}

// Recreates Array.prototype.flatMap() behavior
function flatMap(arr, callback) {
  const result = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      const mappedValue = callback(arr[i], i, arr);
      
      // Flatten by exactly one level if the returned value is an array
      if (Array.isArray(mappedValue)) {
        for (let j = 0; j < mappedValue.length; j++) {
          result.push(mappedValue[j]);
        }
      } else {
        result.push(mappedValue);
      }
    }
  }
  return result;
}


// Recreates Array.prototype.filter() behavior
function filter(arr, predicate) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      if (predicate(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

// Recreates Lodash's reject() behavior (keeps items that return false)
function reject(arr, predicate) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      if (!predicate(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

// Recreates Lodash's partition() behavior (splits into [truthy, falsy] arrays)
function partition(arr, predicate) {
  const truthy = [];
  const falsy = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      if (predicate(arr[i], i, arr)) {
        truthy.push(arr[i]);
      } else {
        falsy.push(arr[i]);
      }
    }
  }
  return [truthy, falsy];
}


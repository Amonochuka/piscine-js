// Returns true if every single item satisfies the condition
function every(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      if (!predicate(arr[i], i, arr)) {
        return false;
      }
    }
  }
  return true;
}

// Returns true if at least one item satisfies the condition
function some(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      if (predicate(arr[i], i, arr)) {
        return true;
      }
    }
  }
  return false;
}

// Returns true if absolutely zero items satisfy the condition
function none(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      if (predicate(arr[i], i, arr)) {
        return false;
      }
    }
  }
  return true;
}

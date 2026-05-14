// Accumulates from left to right, requiring an explicit initial accumulator
function fold(arr, callback, accumulator) {
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  }
  return accumulator;
}

// Accumulates from right to left, requiring an explicit initial accumulator
function foldRight(arr, callback, accumulator) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i in arr) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  }
  return accumulator;
}

// Recreates Array.prototype.reduce() behavior from left to right
function reduce(arr, callback) {
  if (arr.length < 1) {
    throw new Error('Array must contain at least one element');
  }

  let i = 0;
  // Find the first assigned index to establish the initial value
  while (i < arr.length && !(i in arr)) {
    i++;
  }

  if (i === arr.length) {
    throw new Error('Reduce of empty array with no initial value');
  }

  let accumulator = arr[i];

  // Process the remainder of the array
  for (let j = i + 1; j < arr.length; j++) {
    if (j in arr) {
      accumulator = callback(accumulator, arr[j], j, arr);
    }
  }
  return accumulator;
}

// Recreates Array.prototype.reduceRight() behavior from right to left
function reduceRight(arr, callback) {
  if (arr.length < 1) {
    throw new Error('Array must contain at least one element');
  }

  let i = arr.length - 1;
  // Find the last assigned index to establish the initial value
  while (i >= 0 && !(i in arr)) {
    i--;
  }

  if (i < 0) {
    throw new Error('Reduce of empty array with no initial value');
  }

  let accumulator = arr[i];

  // Process the remainder of the array moving backwards
  for (let j = i - 1; j >= 0; j--) {
    if (j in arr) {
      accumulator = callback(accumulator, arr[j], j, arr);
    }
  }
  return accumulator;
}

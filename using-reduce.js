// Accumulates an array of numbers into a single sum total
function adder(arr, initialValue = 0) {
  return arr.reduce((acc, num) => acc + num, initialValue);
}

// Combines elements conditionally: multiplies even numbers, adds odd numbers
function sumOrMul(arr, initialValue = 0) {
  return arr.reduce((acc, num) => {
    if (num % 2 === 0) {
      return acc * num;
    } else {
      return acc + num;
    }
  }, initialValue);
}

// Executes a sequence of functions, passing the accumulated result to the next
function funcExec(arr, initialValue) {
  return arr.reduce((acc, func) => func(acc), initialValue);
}


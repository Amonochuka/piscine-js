// Curried function multiplying two numbers
function mult2(a) {
  return function(b) {
    return a * b;
  };
}

// Curried function adding three numbers
function add3(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

// Curried function subtracting four numbers in sequence
function sub4(a) {
  return function(b) {
    return function(c) {
      return function(d) {
        return a - b - c - d;
      };
    };
  };
}


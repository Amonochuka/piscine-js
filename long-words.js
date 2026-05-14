// Returns true if every element is a string with at least 5 characters
function longWords(arr) {
  return arr.every(word => typeof word === 'string' && word.length >= 5);
}

// Returns true if at least one element is a string with 10 or more characters
function oneLongWord(arr) {
  return arr.some(word => typeof word === 'string' && word.length >= 10);
}

// Returns true if NO elements are strings with 7 or more characters
function noLongWords(arr) {
  return !arr.some(word => typeof word === 'string' && word.length >= 7);
}


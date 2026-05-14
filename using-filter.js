// Returns strings with fewer than 7 characters
function filterShortStateName(arr) {
  return arr.filter(state => state.length < 7);
}

// Returns strings that start with a vowel (case-insensitive)
function filterStartVowel(arr) {
  return arr.filter(state => /^[aeiou]/i.test(state));
}

// Returns strings containing at least 5 vowels (case-insensitive)
function filter5Vowels(arr) {
  return arr.filter(state => {
    const matches = state.match(/[aeiou]/gi);
    return matches !== null && matches.length >= 5;
  });
}

// Returns strings containing exactly one unique vowel type
function filter1DistinctVowel(arr) {
  return arr.filter(state => {
    const matches = state.toLowerCase().match(/[aeiou]/g);
    if (!matches) return false;
    const uniqueVowels = new Set(matches);
    return uniqueVowels.size === 1;
  });
}

// Filters objects matching four specific key/value constraints
function multiFilter(arr) {
  return arr.filter(item => {
    const hasLongCapital = item.capital.length >= 8;
    const nameStartsConsonant = !/^[aeiou]/i.test(item.name);
    const tagHasVowel = /[aeiou]/i.test(item.tag);
    const isNotSouth = item.region !== 'South';

    return hasLongCapital && nameStartsConsonant && tagHasVowel && isNotSouth;
  });
}



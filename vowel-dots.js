const vowels = /[aeiou]/gi

function vowelDots(str) {
    return str.replace(vowels, '$&.')
}

// g ;global, find ALL vowels not just first
// i ;case insensitive, matches A E I O U too
// tests
console.log(vowelDots("hello world"))   // 'he.llo wo.rld'
console.log(vowelDots("Vowels are fun")) // 'Vo.we.ls a.re. fu.n'
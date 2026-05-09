const vowels = /[aeiou]/gi

function vowelDots(str) {
    return str.replace(vowels, '$&.')
}

// tests
console.log(vowelDots("hello world"))   // 'he.llo wo.rld'
console.log(vowelDots("Vowels are fun")) // 'Vo.we.ls a.re. fu.n'
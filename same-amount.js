function sameAmount(str, reg1, reg2) {
    const matches1 = str.match(reg1) || []
    const matches2 = str.match(reg2) || []
    return matches1.length === matches2.length
}

// tests
console.log(sameAmount("abc123abc", /a/g, /1/g))  // false (2 vs 1)
console.log(sameAmount("xoxo", /x/g, /o/g))       // true  (2 vs 2)
console.log(sameAmount("hello", /l/g, /o/g))      // false (2 vs 1)
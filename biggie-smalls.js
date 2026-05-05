const smalls = -Number.MAX_VALUE  // smallest (most negative) number
const biggie = Number.MAX_VALUE   // largest number

// tests
console.log(smalls < -1e308)   // true
console.log(isFinite(smalls))  // true
console.log(biggie > 1e308)    // true
console.log(isFinite(biggie))  // true
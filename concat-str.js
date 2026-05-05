function concatStr(a, b) {
    return String(a) + String(b)
}

// tests
console.log(concatStr("Hello", "World"))       // 'HelloWorld'
console.log(concatStr("The answer is ", 42))   // 'The answer is 42'
console.log(concatStr(123, 456))               // '123456'
console.log(concatStr(true, " statement"))     // 'true statement'
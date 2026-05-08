function multiply(a, b) {
    // handle negatives
    const sign = (a < 0) !== (b < 0) ? -1 : 1
    a = Math.abs(a)
    b = Math.abs(b)
    
    let result = 0
    for (let i = 0; i < b; i++) {
        result += a
    }
    return result * sign
}

function divide(a, b) {
    if (b === 0) return NaN  // can't divide by zero
    const sign = (a < 0) !== (b < 0) ? -1 : 1
    a = Math.abs(a)
    b = Math.abs(b)

    let result = 0
    while (a >= b) {
        a -= b
        result++
    }
    return result * sign
}

function modulo(a, b) {
    if (b === 0) return NaN
    const sign = a < 0 ? -1 : 1
    a = Math.abs(a)
    b = Math.abs(b)

    while (a >= b) {
        a -= b
    }
    return a * sign
}

// tests
console.log(multiply(3, 4))   // 12
console.log(multiply(-3, 4))  // -12
console.log(divide(12, 3))    // 4
console.log(divide(10, 3))    // 3
console.log(modulo(10, 3))    // 1
console.log(modulo(-10, 3))   // -1
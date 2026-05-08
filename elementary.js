function multiply(a, b) {
    const sign = (a < 0) !== (b < 0) ? -1 : 1
    a = Math.abs(a)
    b = Math.abs(b)
    
    let result = 0
    for (let i = 0; i < b; i++) {
        result += a
    }
    return sign < 0 ? -result : result
}

function divide(a, b) {
    if (b === 0) return NaN
    const sign = (a < 0) !== (b < 0) ? -1 : 1
    a = Math.abs(a)
    b = Math.abs(b)

    let result = 0
    while (a >= b) {
        a -= b
        result++
    }
    return sign < 0 ? -result : result 
}

function modulo(a, b) {
    if (b === 0) return NaN
    const sign = a < 0 ? -1 : 1
    a = Math.abs(a)
    b = Math.abs(b)

    while (a >= b) {
        a -= b
    }
    return sign < 0 ? -a : a  
}
function repeat(str, n) {
    let result = ''
    for (let i = 0; i < n; i++) {
        result += str
    }
    return result
}

// function repeat(str, n) {
//     if (n === 0) return ''
//     return str + repeat(str, n - 1)
// }
function letterSpaceNumber(str) {
    const result = []
    
    for (let i = 0; i < str.length - 2; i++) {
        const isLetter = (str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')
        const isSpace = str[i + 1] === ' '
        const isDigit = str[i + 2] >= '0' && str[i + 2] <= '9'
        const nextIsLetter = (str[i + 3] >= 'a' && str[i + 3] <= 'z') || (str[i + 3] >= 'A' && str[i + 3] <= 'Z')
        const nextIsDigit = str[i + 3] >= '0' && str[i + 3] <= '9'
        
        if (isLetter && isSpace && isDigit && !nextIsLetter && !nextIsDigit) {
            result.push(str[i] + str[i + 1] + str[i + 2])
        }
    }
    
    return result
}

// function letterSpaceNumber(str) {
//     const regex = /[a-zA-Z] \d(?![a-zA-Z])/g
//     return str.match(regex) || []
// }
function pyramid(char, height) {
    let result = ''
    
    for (let i = 1; i <= height; i++) {
        // spaces
        for (let j = 1; j <= height; j++) {
            if (j <= height - i) result += ' '
        }
        // stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            result += char
        }
        if (i < height) result += '\n'
    }
    
    return result
}

console.log(pyramid("*", 5))
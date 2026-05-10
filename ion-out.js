function ionOut(str) {
    const result = []
    const words = str.split(' ')
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        
        // find 'tion' in word
        for (let j = 0; j < word.length; j++) {
            // check if 'tion' starts at position j
            if (word[j] === 't' && 
                word[j+1] === 'i' && 
                word[j+2] === 'o' && 
                word[j+3] === 'n') {
                // found 'tion'! slice up to and including 't'
                result.push(word.slice(0, j + 1))
                break
            }
        }
    }
    
    return result
}

// tests
console.log(ionOut("attention caution nation motion"))
// ['attent', 'caut', 'nat', 'mot']

console.log(ionOut("creation fiction emotion"))
// ['creat', 'fict', 'emot']

// function ionOut(str) {
//     const matches = str.match(/\w+(?=ion\b)/g)
//     return matches ? matches.filter(m => m[m.length - 1] === 't') : []
// }
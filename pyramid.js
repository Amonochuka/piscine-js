function pyramid(char, height) {
    let result = ''
    
    for (let i = 1; i <= height; i++) {
        // spaces - account for char length
        for (let j = 1; j <= height - i; j++) {
            for (let s = 0; s < char.length; s++) {
                result += ' '
            }
        }
        // stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            result += char
        }
        if (i < height) result += '\n'
    }
    
    return result
}
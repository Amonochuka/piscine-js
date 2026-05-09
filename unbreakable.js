function split(str, sep) {
    const result = []
    let current = ''

    // edge case - empty separator splits every character
    if (sep === '') {
        for (let i = 0; i < str.length; i++) {
            result.push(str[i])
        }
        return result
    }

    for (let i = 0; i < str.length; i++) {
        // check if separator starts here
        let match = true
        for (let j = 0; j < sep.length; j++) {
            if (str[i + j] !== sep[j]) {
                match = false
                break
            }
        }

        if (match) {
            result.push(current)  // save current word
            current = ''          // reset
            i += sep.length - 1   // skip separator
        } else {
            current += str[i]     // keep building current word
        }
    }
    result.push(current)  // push last word
    return result
}

function join(arr, sep = ',') {
    let result = ''
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
        if (i < arr.length - 1) result += sep  // no separator after last element
    }
    return result
}


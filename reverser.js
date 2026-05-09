function reverse(input) {
    const isString = typeof input === 'string'
    let result = isString ? '' : []

    for (let i = input.length - 1; i >= 0; i--) {
        if (isString) {
            result += input[i]
        } else {
            result.push(input[i])
        }
    }

    return result
}


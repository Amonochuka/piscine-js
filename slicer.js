function slice(input, start = 0, end = input.length) {
    const len = input.length

    // handle negative indexes
    if (start < 0) start = len + start
    if (end < 0) end = len + end

    // clamp to valid range
    if (start < 0) start = 0
    if (end > len) end = len

    const isString = typeof input === "string"
    let result = isString ? '' : []

    for (let i = start; i < end; i++) {
        if (isString) {
            result += input[i]
        } else {
            result.push(input[i])
        }
    }

    return result
}

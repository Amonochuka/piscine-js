function trunc(n) {
    if (n >= 0) {
        let i = 0
        while (i + 1 <= n) i++
        return i
    } else {
        let i = 0
        while (i - 1 >= n) i--
        return i
    }
}

function floor(n) {
    const t = trunc(n)
    if (n < 0 && n !== t) return t - 1
    return t
}

function ceil(n) {
    const t = trunc(n)
    if (n > 0 && n !== t) return t + 1
    return t
}

function round(n) {
    return floor(n + 0.5)
}

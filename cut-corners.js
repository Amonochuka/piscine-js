function trunc(n) {
    return parseInt(n)  // removes decimal part
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
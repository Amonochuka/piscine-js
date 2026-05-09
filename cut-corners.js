function trunc(n) {
    const sign = n < 0 ? -1 : 1
    n = n < 0 ? -n : n  // make positive

    let i = 0
    while (i + 1 <= n) i++  // increment by 1

    // but return with correct sign
    return sign < 0 ? -i : i
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
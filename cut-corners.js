function trunc(n) {
    const sign = n < 0 ? -1 : 1
    n = n < 0 ? -n : n  // make positive
    
    let i = 0
    let step = 1
    // double step by addition not multiplication
    while (i + step + step <= n) step += step
    while (step >= 1) {
        while (i + step <= n) i += step
        step -= step / 2  
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
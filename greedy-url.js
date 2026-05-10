function getURL(dataSet) {
    const words = dataSet.split(' ')
    const result = []
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i].trim()
        if (word.startsWith('http://') || word.startsWith('https://')) {
            result.push(word)
        }
    }
    
    return result
}

function countParams(url) {
    // find the ? part
    const questionMark = url.indexOf('?')
    if (questionMark === -1) return 0  // no query params
    
    // get everything after ?
    const queryString = url.slice(questionMark + 1)
    
    // count & signs and add 1 (first param has no &)
    let count = 1
    for (let i = 0; i < queryString.length; i++) {
        if (queryString[i] === '&') count++
    }
    
    return count
}

function greedyQuery(dataSet) {
    const urls = getURL(dataSet)
    const result = []
    
    for (let i = 0; i < urls.length; i++) {
        if (countParams(urls[i]) >= 3) {
            result.push(urls[i])
        }
    }
    
    return result
}

function notSoGreedy(dataSet) {
    const urls = getURL(dataSet)
    const result = []
    
    for (let i = 0; i < urls.length; i++) {
        const count = countParams(urls[i])
        if (count >= 2 && count <= 3) {
            result.push(urls[i])
        }
    }
    
    return result
}
function getURL(dataSet) {
    const result = []
    const words = dataSet.split(/\s+/)  // split by ANY whitespace (spaces AND newlines)
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i].trim()
        
        // must start with http:// or https://
        // AND must have something after ://  (at least one character)
        if ((word.startsWith('http://') || word.startsWith('https://')) 
            && word.length > 7  // longer than just "http://"
            && word !== 'http://' 
            && word !== 'https://') {
            result.push(word)
        }
    }
    
    return result
}

function countParams(url) {
    const questionMark = url.indexOf('?')
    if (questionMark === -1) return 0

    const queryString = url.slice(questionMark + 1)
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
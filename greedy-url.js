function getURL(dataSet) {
    const matches = dataSet.match(/https?:\/\/[^\s]*/g) || []
    const result = []
    
    for (let i = 0; i < matches.length; i++) {
        const url = matches[i]
        if (url !== 'http://' && url !== 'https://') {
            result.push(url)
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
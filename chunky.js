function chunk(arr, size) {
    if (size === 0) return []
    
    const result = []
    
    for (let i = 0; i < arr.length; i += size) {
        let end = i + size
        if (end > arr.length) end = arr.length
        
        result.push(arr.slice(i, end))
    }
    
    return result
}
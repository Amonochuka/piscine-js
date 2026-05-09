function flat(arr) {
    let result = []
    
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            const flattened = flat(arr[i])  // recurse into nested array
            for (let j = 0; j < flattened.length; j++) {
                result.push(flattened[j])
            }
        } else {
            result.push(arr[i])
        }
    }
    
    return result
}

// tests
console.log(flat([1, [2, [3, [4]]]]))     // [1, 2, 3, 4]
console.log(flat([1, 2, [3, 4], [5, 6]])) // [1, 2, 3, 4, 5, 6]
console.log(flat([1, [2, [3]]]))           // [1, 2, 3]
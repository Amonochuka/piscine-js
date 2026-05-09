function flat(arr, depth = 1) {
    let result = []
    
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && depth > 0) {
            const flattened = flat(arr[i], depth - 1)  // reduce depth each time
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
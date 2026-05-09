function flat(arr) {
    let result = []
    
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++) {
                result.push(arr[i][j])  // push contents, not the array
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
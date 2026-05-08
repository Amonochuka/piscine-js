function indexOf(arr, value, start = 0) {
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === value) return i
    }
    return -1
}

function lastIndexOf(arr, value) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === value) return i
    }
    return -1
}


function includes(arr, value) {
    const index = indexOf(arr, value)
    if (index !== -1) {
        return true
    } else {
        return false
    }
}

//short version of last func
//function includes(arr, value) {
//     return indexOf(arr, value) !== -1
// }
function first(a){
    return a[0]
}

function last(a){
    return a[a.length -1]
}

function kiss(a) {
    return [last(a), first(a)]
}

// Test first
console.log(first([1, 2, 3]))  // 1
console.log(first("hello"))    // "h"

// Test last
console.log(last([1, 2, 3]))   // 3
console.log(last("hello"))     // "o"

// Test kiss
console.log(kiss([1, 2, 3]))   // [3, 1]
console.log(kiss("hello"))     // ["o", "h"]


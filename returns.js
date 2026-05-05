function id(a) {
    return a
}

function getLength(a) {
    return a.length
}

// Testing id function
console.log(id(5))          // 5
console.log(id("hello"))    // 'hello'
console.log(id([1, 2, 3]))  // [1, 2, 3]

// Testing getLength function
console.log(getLength("hello"))    // 5
console.log(getLength([1, 2, 3]))  // 3
console.log(getLength([]))         // 0
console.log(getLength(""))         // 0
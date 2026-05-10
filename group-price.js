function groupPrice(str) {
    const regex = /[A-Z]{3}(\d+)\.(\d+)/g
    const result = []
    
    let match
    while ((match = regex.exec(str)) !== null) {
        result.push([match[0], match[1], match[2]])
    }
    
    return result
}

// tests
console.log(groupPrice("The item costs USD12.31 and the tax is EUR9.99"))
// [["USD12.31", "12", "31"], ["EUR9.99", "9", "99"]]

console.log(groupPrice("No prices here!"))
// []
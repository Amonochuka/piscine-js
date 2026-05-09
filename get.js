function get(src, path) {
    const keys = path.split('.')
    let current = src
    
    for (let i = 0; i < keys.length; i++) {
        if (current === undefined || current === null) return undefined
        current = current[keys[i]]
    }
    
    return current
}

// tests
const src = { nested: { key: "peekaboo" } }
console.log(get(src, "nested.key"))        // "peekaboo"
console.log(get(src, "nested"))            // { key: "peekaboo" }
console.log(get(src, "nested.missing"))    // undefined
console.log(get(src, "a.b.c"))            // undefined
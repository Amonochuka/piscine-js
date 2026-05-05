const sourceObject = {
    num: 42,
    bool: true,
    str: "some text",
    log: console.log,
}

function get(key) {
    return sourceObject[key]
}

function set(key, value) {
    sourceObject[key] = value
    return value
}

// // Test get
// console.log(get("num"))   // 42
// console.log(get("bool"))  // true
// console.log(get("str"))   // 'some text'

// // Test set
// console.log(set("num", 77))        // 77
// console.log(set("bool", false))    // false
// console.log(set("str", "new text")) // 'new text'

// // Verify changes were made
// console.log(get("num"))   // 77
// console.log(get("bool"))  // false
// console.log(get("str"))   // 'new text'
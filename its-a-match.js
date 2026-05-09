const normal = /hi/
const begin = /^hi/
const end = /hi$/
const beginEnd = /^hi$/

// tests
console.log(normal.test("oh hi there"))   // true
console.log(normal.test("goodbye"))       // false
console.log(begin.test("hi there"))       // true
console.log(begin.test("say hi"))         // false
console.log(end.test("say hi"))           // true
console.log(end.test("hi there"))         // false
console.log(beginEnd.test("hi"))          // true
console.log(beginEnd.test("hiya"))        // false
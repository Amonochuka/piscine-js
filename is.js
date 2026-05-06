const is = {}

is.num   = (v) => typeof v === "number" && !isNaN(v)
is.nan   = (v) => isNaN(v) && typeof v === "number"
is.str   = (v) => typeof v === "string"
is.bool  = (v) => typeof v === "boolean"
is.undef = (v) => v === undefined
is.def   = (v) => v !== undefined
is.arr   = (v) => Array.isArray(v)
is.obj   = (v) => v === null || (typeof v === "object" && !Array.isArray(v) && typeof v !== "function")
is.fun   = (v) => typeof v === "function"
is.truthy = (v) => !!v
is.falsy  = (v) => !v

// Test is.num
console.log(is.num(5)); // true
console.log(is.num(-5.5)); // true
console.log(is.num(NaN)); // false
console.log(is.num("5")); // false

// Test is.nan
console.log(is.nan(NaN)); // true
console.log(is.nan(5)); // false
console.log(is.nan("hello")); // false

// Test is.str
console.log(is.str("hello")); // true
console.log(is.str("")); // true
console.log(is.str(5)); // false

// Test is.bool
console.log(is.bool(true)); // true
console.log(is.bool(false)); // true
console.log(is.bool(1)); // false

// Test is.undef
console.log(is.undef(undefined)); // true
console.log(is.undef(null)); // false
console.log(is.undef(0)); // false

// Test is.def
console.log(is.def(undefined)); // false
console.log(is.def(null)); // true
console.log(is.def(0)); // true

// Test is.arr
console.log(is.arr([])); // true
console.log(is.arr([1, 2, 3])); // true
console.log(is.arr({})); // false

// Test is.obj
console.log(is.obj({})); // true
console.log(is.obj(null)); // true
console.log(is.obj([])); // false
console.log(is.obj(function () {})); // false

// Test is.fun
console.log(is.fun(function () {})); // true
console.log(is.fun(() => {})); // true
console.log(is.fun({})); // false

// Test is.truthy
console.log(is.truthy(true)); // true
console.log(is.truthy(1)); // true
console.log(is.truthy("hello")); // true
console.log(is.truthy(0)); // false
console.log(is.truthy("")); // false
console.log(is.truthy(null)); // false

// Test is.falsy
console.log(is.falsy(false)); // true
console.log(is.falsy(0)); // true
console.log(is.falsy("")); // true
console.log(is.falsy(null)); // true
console.log(is.falsy(undefined)); // true
console.log(is.falsy(NaN)); // true
console.log(is.falsy(1)); // false
console.log(is.falsy("hello")); // false
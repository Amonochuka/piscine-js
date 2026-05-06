const is = {}

//short version; condition ? valueIfTrue : valueIfFalse
is.num = (v) => typeof v === "number" && !isNaN(v) ? v : NaN
//     if (typeof v === "number" && !isNaN(v)) {
//         return v    // it's a number, return it
//     } else {
//         return NaN  // not a number, return NaN
//     }
// }
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

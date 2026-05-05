const escapeStr = "\`\\/\"\'";
const arr = [4, '2'];

const obj = Object.freeze({
    str :"Amon",
    num : 12,
    bool : true,
    undef : undefined

});

const nested = Object.freeze({
    arr :[4, undefined, 2],
    obj: {
        str : "Ochuka",
        num : 6,
        bool: true
    }
});

Object.freeze(arr);

// // Test your frozen objects
// arr[0] = "changed"; // Should not change
// obj.str = "changed"; // Should not change
// nested.obj.bool = "changed"; // Should not change

// console.log(arr);          
// console.log(obj.str);       
// console.log(nested.obj.bool); 

const clone1 = { ...person }
const clone2 = Object.assign({}, person)

//reference to same object
const samePerson = person

//modify original
person.age += 1
person.country = 'FR'

console.log(person.age === 78);      // true
console.log(person.country === "FR"); // true
console.log(clone1.age === 77);      // true
console.log(clone1.country === "US"); // true
console.log(clone2.age === 77);      // true
console.log(clone2.country === "US"); // true
console.log(samePerson.age === 78);  // true
console.log(samePerson.country === "FR"); // true
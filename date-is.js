function isValid(date) {
    if (date instanceof Date) return !isNaN(date.getTime())
    if (typeof date === 'number') return !isNaN(date)
    return false
}

function isAfter(date1, date2) {
    if (!isValid(date1) || !isValid(date2)) return false
    return new Date(date1).getTime() > new Date(date2).getTime()
}

function isBefore(date1, date2) {
    if (!isValid(date1) || !isValid(date2)) return false
    return new Date(date1).getTime() < new Date(date2).getTime()
}

function isFuture(date) {
    return isValid(date) && new Date(date).getTime() > new Date().getTime()
}

function isPast(date) {
    return isValid(date) && new Date(date).getTime() < new Date().getTime()
}

// // tests
// const date1 = new Date('2024-01-01')
// const date2 = new Date('2023-01-01')
// const invalid = new Date('invalid')

// console.log(isValid(date1))                    // true
// console.log(isValid(invalid))                  // false
// console.log(isAfter(date1, date2))             // true
// console.log(isBefore(date2, date1))            // true
// console.log(isFuture(new Date('2999-01-01'))) // true
// console.log(isPast(new Date('1999-12-31')))   // true
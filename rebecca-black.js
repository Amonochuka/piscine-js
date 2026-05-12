function isFriday(date) {
    return date.getDay() === 5  // 5 = Friday
}

function isWeekend(date) {
    return date.getDay() === 0 || date.getDay() === 6  // 0=Sunday, 6=Saturday
}

function isLeapYear(date) {
    const year = date.getFullYear()
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

function isLastDayOfMonth(date) {
    const year = date.getFullYear()
    const month = date.getMonth()
    const lastDay = new Date(year, month + 1, 0).getDate()
    return date.getDate() === lastDay
}


console.log(isFriday(new Date('2024-03-01')))         // true
console.log(isWeekend(new Date('2024-03-03')))        // true
console.log(isLeapYear(new Date('2024-01-01')))       // true
console.log(isLastDayOfMonth(new Date('2024-02-29'))) // true
console.log(isLastDayOfMonth(new Date('2024-02-28'))) // false
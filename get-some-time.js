function firstDayWeek(week, year) {
    // find January 1st of the year
    const jan1 = new Date(`${year}-01-01`)
    
    // getDay() returns 0=Sunday, 1=Monday... 6=Saturday
    const jan1Day = jan1.getDay()
    
    // find how many days to get to the first Monday
    // if jan1 is Monday (1), offset is 0
    // if jan1 is Tuesday (2), offset is -1 (go back 1 day)
    // if jan1 is Sunday (0), offset is 1 (go forward 1 day)
    let offset
    if (jan1Day === 0) {
        offset = 1  // Sunday → go forward to Monday
    } else {
        offset = 1 - jan1Day  // other days → go back to Monday
    }
    
    // find the first Monday of the year
    const firstMonday = new Date(jan1)
    firstMonday.setDate(jan1.getDate() + offset)
    
    // calculate the Monday of the requested week
    const targetMonday = new Date(firstMonday)
    targetMonday.setDate(firstMonday.getDate() + (week - 1) * 7)
    
    // if target is before jan1, return jan1
    if (targetMonday < jan1) {
        return formatDate(jan1)
    }
    
    return formatDate(targetMonday)
}


//'1'.padStart(2, '0')  // '01' - pads with 0 to make length 2
//'12'.padStart(2, '0') // '12' - already 2 chars, no padding
function formatDate(date) {
    const dd = String(date.getDate()).padStart(2, '0')
    const mm = String(date.getMonth() + 1).padStart(2, '0')  // months are 0-indexed!
    const yyyy = date.getFullYear()
    return `${dd}-${mm}-${yyyy}`
}

// tests
console.log(firstDayWeek(1, "2024"))   // '01-01-2024'
console.log(firstDayWeek(10, "2025"))  // '03-03-2025'
console.log(firstDayWeek(1, "2021"))   // '01-01-2021'
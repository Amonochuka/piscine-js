function firstDayWeek(week, year) {
    const jan1 = new Date(`${year}-01-01`)
    const jan1Day = jan1.getDay()  // 0=Sun, 1=Mon... 6=Sat
    
    // find the Monday of the week containing Jan 1
    // if Sunday (0), Monday was 6 days ago
    // if Monday (1), offset is 0
    // if Tuesday (2), Monday was 1 day ago
    const daysToMonday = jan1Day === 0 ? -6 : 1 - jan1Day
    
    const firstWeekMonday = new Date(jan1)
    firstWeekMonday.setDate(jan1.getDate() + daysToMonday)
    
    // calculate target Monday
    const targetMonday = new Date(firstWeekMonday)
    targetMonday.setDate(firstWeekMonday.getDate() + (week - 1) * 7)
    
    // if before jan1, return jan1
    if (targetMonday < jan1) return formatDate(jan1)
    
    return formatDate(targetMonday)
}
//'1'.padStart(4, '0')    // '0001' 
//'2024'.padStart(4, '0') // '2024' 

function formatDate(date) {
    const dd = String(date.getDate()).padStart(2, '0')
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const yyyy = String(date.getFullYear()).padStart(4, '0')
    return `${dd}-${mm}-${yyyy}`
}

// tests
console.log(firstDayWeek(1, "2024"))   // '01-01-2024'
console.log(firstDayWeek(10, "2025"))  // '03-03-2025'
console.log(firstDayWeek(1, "2021"))   // '01-01-2021'
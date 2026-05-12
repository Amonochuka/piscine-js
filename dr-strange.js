function addWeek(date) {
    const days = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
        'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'
    ]
    
    // epoch start date: 0001-01-01
    const epoch = new Date('0001-01-01')
    
    // calculate difference in days
    const diffMs = date - epoch  // difference in milliseconds
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    
    // use modulo 14 to get position in 14-day week
    const dayIndex = diffDays % 14
    
    return days[dayIndex]
}

function timeTravel({ date, hour, minute, second }) {
    // create a copy to avoid modifying original
    const newDate = new Date(date)
    
    newDate.setHours(hour)
    newDate.setMinutes(minute)
    newDate.setSeconds(second)
    
    return newDate
}

// tests
console.log(addWeek(new Date('0001-01-01')))  // Monday
console.log(addWeek(new Date('0001-01-02')))  // Tuesday
console.log(addWeek(new Date('0001-01-07')))  // Sunday
console.log(addWeek(new Date('0001-01-08')))  // secondMonday
console.log(addWeek(new Date('0001-01-09')))  // secondTuesday

const result = timeTravel({
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22,
})
console.log(result.toString())
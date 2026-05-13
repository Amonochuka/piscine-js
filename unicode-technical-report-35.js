function format(date, pattern) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const dayOfWeek = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const weekdays = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];

  const tokens = {
    yyyy: year.toString(),
    yy: year.toString().slice(-2),
    y: year.toString(),
    MMMM: months[month],
    MMM: months[month].slice(0, 3),
    MM: (month + 1).toString().padStart(2, '0'),
    M: (month + 1).toString(),
    dd: day.toString().padStart(2, '0'),
    d: day.toString(),
    EEEE: weekdays[dayOfWeek],
    E: weekdays[dayOfWeek].slice(0, 3),
    HH: hours.toString().padStart(2, '0'),
    H: hours.toString(),
    hh: ((hours % 12) || 12).toString().padStart(2, '0'),
    h: ((hours % 12) || 12).toString(),
    mm: minutes.toString().padStart(2, '0'),
    m: minutes.toString(),
    ss: seconds.toString().padStart(2, '0'),
    s: seconds.toString(),
    a: hours < 12 ? 'AM' : 'PM',
    GGGG: 'Anno Domini',
    G: 'AD'
  };

  // Replace tokens from longest to shortest to avoid partial replacements
  return pattern.replace(
    /yyyy|yy|y|MMMM|MMM|MM|M|dd|d|EEEE|E|HH|H|hh|h|mm|m|ss|s|a|GGGG|G/g,
    (match) => tokens[match]
  );
}

// Example usage:
const d = new Date("7 January 1985, 3:08:19");
console.log(format(d, "HH(mm)ss [dd] <MMM>")); // Output: '03(08)19 [07] <Jan>'
console.log(format(d, "EEEE, MMMM d, yyyy G")); // Output: 'Monday, January 7, 1985 AD'
console.log(format(d, "h:mm:ss a"));          // Output: '3:08:19 AM'

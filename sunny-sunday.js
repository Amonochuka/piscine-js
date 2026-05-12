function sunnySunday(date) {
  // 1. Define the custom 6-day week
  const customWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  // 2. Define the anchor date (01/01/0001 is a Monday)
  const epoch = new Date("0001-01-01T00:00:00Z");

  // 3. Calculate the total days difference
  // getTime() returns milliseconds. We convert to days.
  const diffTime = Math.abs(date.getTime() - epoch.getTime());
  const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // 4. Calculate the day in the new 6-day system using modulo
  // Since 01/01/0001 is Monday (index 0), we use modulo 6.
  const dayIndex = totalDays % 6;

  return customWeek[dayIndex];
}

console.log(sunnySunday(new Date("0001-01-01"))); // "Monday"
console.log(sunnySunday(new Date("0001-01-02"))); // "Tuesday"
console.log(sunnySunday(new Date("0001-01-06"))); // "Saturday"
console.log(sunnySunday(new Date("0001-01-07"))); // "Monday" (Sunday skipped)
console.log(sunnySunday(new Date("0001-01-08"))); // "Tuesday"

function matchCron(cron, date) {
  // 1. Split the cron string into its 5 components
  const fields = cron.split(' ');

  // 2. Extract values from the Date object
  // getMonth() is 0-indexed, so we add 1.
  // getDay() is 0 (Sun) - 6 (Sat). We convert 0 to 7 to match requirements.
  const dateValues = [
    date.getMinutes(),
    date.getHours(),
    date.getDate(),
    date.getMonth() + 1,
    date.getDay() === 0 ? 7 : date.getDay()
  ];

  // 3. Compare each field
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];

    // If it's a wildcard, skip to the next field
    if (field === '*') continue;

    // Otherwise, compare the numeric value
    if (parseInt(field) !== dateValues[i]) {
      return false;
    }
  }

  // If all checks pass
  return true;
}

console.log(matchCron("9 * * * *", new Date("2020-05-30 18:09:00"))); // true
console.log(matchCron("9 * * * *", new Date("2020-05-30 19:09:00"))); // true
console.log(matchCron("9 * * * *", new Date("2020-05-30 19:21:00"))); // false

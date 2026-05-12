function countLeapYears(date) {
  const year = date.getFullYear();
  const previousYear = year - 1;

  if (previousYear < 4) return 0;

  // Leap year formula:
  // 1. Every 4th year is a leap year.
  // 2. Subtract every 100th year (not leap years).
  // 3. Add back every 400th year (exception to the 100 rule).
  const count = Math.floor(previousYear / 4)  - Math.floor(previousYear / 100)  + Math.floor(previousYear / 400);

  return count;
}


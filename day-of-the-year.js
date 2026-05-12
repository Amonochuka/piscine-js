function dayOfTheYear(date) {
  // 1. Get the year from the date
  const year = date.getFullYear();
  
  // 2. Create January 1st of that year safely
  const startOfYear = new Date(0); // Create a baseline date
  startOfYear.setFullYear(year, 0, 1); // Set to Jan 1st of the target year
  startOfYear.setHours(0, 0, 0, 0); // Ensure time is at midnight

  // 3. Normalize the input date to midnight to avoid partial day math
  const targetDate = new Date(date);
  targetDate.setHours(0, 0, 0, 0);

  // 4. Calculate difference in milliseconds
  const diffInMs = targetDate - startOfYear;
  
  // 5. Convert to days and add 1
  const msInADay = 1000 * 60 * 60 * 24;
  return Math.round(diffInMs / msInADay) + 1;
}

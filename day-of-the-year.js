function dayOfTheYear(date) {
  // 1. Get the year from the provided date
  const year = date.getFullYear();
  
  // 2. Create a Date object for January 1st of that same year
  // We use 0, 1 to represent Month (Jan) and Day (1st)
  const startOfYear = new Date(year, 0, 1);
  
  // 3. Subtract the two dates to get the difference in milliseconds
  const diffInMs = date - startOfYear;
  
  // 4. Convert milliseconds to days
  // (1000ms * 60s * 60m * 24h)
  const msInADay = 1000 * 60 * 60 * 24;
  const diffInDays = Math.floor(diffInMs / msInADay);
  
  // 5. Add 1 because January 1st should return 1, not 0
  return diffInDays + 1;
}


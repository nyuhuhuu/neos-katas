const getMondayBasedDayIndex = (date) => {
  const day = new Date(date).getDay();
  if (day === 0) return 6;
  return day - 1;
};

const mostFrequentDays = (year) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const first = getMondayBasedDayIndex(`${year}-01-01`);
  const last = getMondayBasedDayIndex(`${year}-12-31`);
  const mostFrequent = first === last ? [first] : [first, last].sort();
  return mostFrequent.map(idx => days[idx]);
};

console.log(mostFrequentDays(2427)); // => ['Friday']
console.log(mostFrequentDays(2185)); // => ['Saturday']
console.log(mostFrequentDays(2860)); // => ['Thursday', 'Friday']

// Returns count of given days in given year
const getDayCount = (year, dayIndex) => {
  let today = new Date(year, 0);
  let count = 0;
  while (today.getFullYear() === year) {
    if (today.getDay() === dayIndex) {
      count++;
    }
    today.setDate(today.getDate() + 1);
  }
  return count;
};

// Returns Sunday-based day index
const getSundayBasedIndex = (mondayBasedDayIndex) => {
  if (mondayBasedDayIndex == 6) return 0;
  return mondayBasedDayIndex + 1;
};

// Returns map of name -> count for each day in the given `year`
const getDaysFrequency = (year) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return days.reduce((freq, dayName) => {
    const dayIndex = days.indexOf(dayName);
    freq[dayName] = getDayCount(year, getSundayBasedIndex(dayIndex));
    return freq;
  }, {});
};

// Returns array of most frequent days for given `year`
const mostFrequentDays = (year) => {
  const avgWeekCount = 52;
  const freq = getDaysFrequency(year);
  let mostFrequentDays = [];
  for (let day in freq) {
    if (freq[day] > avgWeekCount) {
      mostFrequentDays.push(day);
    }
  }
  return mostFrequentDays;
};

console.log(mostFrequentDays(2427)); // => ['Friday']
console.log(mostFrequentDays(2185)); // => ['Saturday']
console.log(mostFrequentDays(2860)); // => ['Thursday', 'Friday']


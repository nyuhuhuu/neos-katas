const numericals = s => {
  let freq = {};
  return s.replace(/./g, char => freq[char] = (freq[char] || 0) + 1);
};

console.log(numericals("Hello, World!")); // "1112111121311"

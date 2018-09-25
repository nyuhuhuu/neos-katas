function numericals(s){
  let freq = {};
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char in freq) {
      freq[char] += 1;
    } else {
      freq[char] = 1;
    }
    result += freq[char];
  }
  return result;
}

console.log(numericals("Hello, World!")); // "1112111121311"

const numericals = s => {
  let freq = {};
  return s.replace(/./g, char => freq[char] = (freq[char] || 0) + 1);
};

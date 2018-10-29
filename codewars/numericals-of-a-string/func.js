String.prototype.mapChar = function(fn) {
  return this.split("").map(fn).join("");
};

const numericals = (s) => s.mapChar(getCharFreq.bind(null, {}));

const getCharFreq = (freq, char) => freq[char] = (freq[char] || 0) + 1;

console.log(numericals("Hello, World!")); // "1112111121311"

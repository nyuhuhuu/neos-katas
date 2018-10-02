const makeSetRotator = (set, rotator) => item => rotator(set, item);

const rotateChar = (set, char) => {
  const pos = set.indexOf(char);
  if (pos === -1) return char;
  const rotPos = (pos + 1) % set.length;
  return set[rotPos];
};

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const rotateAlpha = makeSetRotator(alphabet, rotateChar);
const rotateString = str => str.split("").map(rotateAlpha).join("");
const isMessageValid = msg => /price|test/.test(msg);

module.exports = { rotateString, isMessageValid, alphabet };

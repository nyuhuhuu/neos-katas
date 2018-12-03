function willThereEverBeARainbow(input){
  const rainbow = "REDORANGEYELLOWGREENBLUEINDIGOVIOLET";
  const doubleRainbow = rainbow.repeat(2);
  if (rainbow.length > input.length) return "Too short for a rainbow!";
  if (!contains(rainbow, input)) return "No rainbow to be found!";
  if (contains(doubleRainbow, input)) return "Double rainbow all the way!";
  return "Look! A rainbow!";
}

// returns true if string haystack contains all characters of string needle
const contains = (needle, haystack) => {
  const needleCharFreq = getCharFreq(needle);
  const haystackCharFreq = getCharFreq(haystack);
  const missing = Object.keys(needleCharFreq).some((char) => {
    if (typeof haystackCharFreq[char] === "undefined") return true;
    return needleCharFreq[char] > haystackCharFreq[char];
  });
  return !missing;
};

// returns key-value map of characters and their frequency for given string
const getCharFreq = (str) => str.split("").reduce((freq, char) => {
  if (char in freq) freq[char] += 1;
  else freq[char] = 1;
  return freq;
}, {});

// test

console.log(willThereEverBeARainbow('EORECDIDSEPYKWNTQVAZIESJKEOOBCCQNHQEJOXJRGLULRPGEGSN'), "No rainbow to be found!");
console.log(willThereEverBeARainbow('LQUEXEEARELNEPOIEBWVTYNIVEGZOLELDOIEOEAADLDTGSDREOORYNGNRNEGRENELROLYNVUODBOKCWILEUFHIGIBIJGMGTLR'), 'Double rainbow all the way!');
console.log(willThereEverBeARainbow("DIIKRMZLLMKEOEKBPTNIGZPRDNMEZXDIEOLGLLBDNSAEXYZURUAIIYLALNPFEEOQZLJHSOEOXXKDUPMOMGRFFNODLNYUJSBCYHHXSAFTDTEAFELZNBLDVEDQNAOFRVMFCNEO"), "No rainbow to be found!");

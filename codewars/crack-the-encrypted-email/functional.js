// lib
const makeSetRotator = (set, rotator) => item => rotator(set, item);

const makeDecoder = (solver, tester, limit = null) => {
  const decoder = (msg, count = 0) => {
    if (tester(msg)) return msg;
    if (limit && count >= limit) throw new Error("No solutions found");
    return decoder(solver(msg), count + 1);
  };
  return decoder;
};

// code
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
const crack = makeDecoder(rotateString, isMessageValid, alphabet.length);

// test
const secret = "ikhcxvmutgdknimykxlahluxzbgvhffngbvtmbhgehpxkzxetmhikbvxlurmabkmrixkvxgmhgmnxlwtrtgwkxwnvxfbedlatdxikbvxlurtmextlmhgxwheetk";
const solution = crack(secret);
console.log(solution);

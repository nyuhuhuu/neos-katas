const { rotateString, isMessageValid, alphabet } = require("./lib.js");
const { secret, limit } = require("./test.js");

// TODO avoid directly accessing functions from the global scope inside `crack()`
// TODO enable calling `crack()` with only message as argument

const crack = (msg, limit = null) => {
  const decoder = (msg, limit, count = 0) => {
    if (isMessageValid(msg)) return msg;
    if (limit && count >= limit) throw new Error("No solutions found");
    return decoder(rotateString(msg), limit, count + 1);
  };
  return decoder(msg, limit);
};

const solution = crack(secret, limit);
console.log(solution);

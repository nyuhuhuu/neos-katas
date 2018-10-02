const { rotateString, isMessageValid } = require("./lib.js");
const { secret, limit } = require("./test.js");

// TODO use recursion instead of the while loop
// TODO avoid directly accessing global variable `limit` in the function

const crack = (msg, count = 0) => {
  while (limit && count < limit) {
    if (isMessageValid(msg)) return msg;
    return crack(rotateString(msg), count + 1);
  }
  throw new Error("No solutions found");
};

const solution = crack(secret);
console.log(solution);

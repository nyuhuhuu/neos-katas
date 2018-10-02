const { rotateString, isMessageValid, alphabet } = require("./lib.js");
const { secret, limit } = require("./test.js");

// TODO remove argument `count` without changing functionality

const crack = (msg, limit = null, count = 0) => {
  if (isMessageValid(msg)) return msg;
  if (limit && count >= limit) throw new Error("No solutions found");
  return crack(rotateString(msg), limit, count + 1);
};

const solution = crack(secret, limit);
console.log(solution);

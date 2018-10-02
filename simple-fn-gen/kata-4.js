const { rotateString, isMessageValid, alphabet } = require("./lib.js");
const { secret, limit } = require("./test.js");

// good job!

const makeDecoder = (solver, tester, limit = null) => {
  const decoder = (msg, count = 0) => {
    if (tester(msg)) return msg;
    if (limit && count >= limit) throw new Error("No solutions found");
    return decoder(solver(msg), count + 1);
  };
  return decoder;
};

const crack = makeDecoder(rotateString, isMessageValid, limit);
const solution = crack(secret);
console.log(solution);

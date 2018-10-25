const add = (a, b, c, d) => {
  return a + b + c + d;
};

// TODO enable `myBind()` to potentially override any amount of characters
const myBind = (arg1) => {
  return (...args) => fn(arg1, ...args);
};

const add5and2 = myBind(add, 5, 2);

// Test
console.log(add5and2(10, 1)); // 18
console.log(add5and2(21, 3)); // 31


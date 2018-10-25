const add = (a, b) => {
  return a + b;
};

// TODO replace this function definition to use `Function.prototype.bind()`
const add5 = (arg) => {
  return add(5, arg);
};

// Test
console.log(add5(10)); // 15
console.log(add5(21)); // 26

const add = (a, b, c, d) => {
  return a + b + c + d;
};

// TODO change `myBind()` to pass all arguments to `add()`
const myBind = (fn, arg1) => {
  return arg2 => fn(arg1, arg2);
};

const add5 = myBind(add, 5);

// Test
console.log(add5(10, 1, 2)); // 18
console.log(add5(21, 3, 4)); // 33

const add = (a, b, c, d) => {
  return a + b + c + d;
};

const myBind = (fn, ...first) => {
  return (...rest) => fn(...first, ...rest);
};

// TODO change `myBind()` so it can be called on functions
// TODO `myBind()` doesn't take the function as a parameter any more
const add5and2 = add.myBind(5, 2);

// Test
console.log(add5and2(10, 1)); // 18
console.log(add5and2(21, 3)); // 31


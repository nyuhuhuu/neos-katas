const add = (a, b) => {
  return a + b;
};

// TODO write your own `myBind()` function that does the same job.
//
// const add5 = app.bind(null, 5);
const add5 = myBind(add, 5);

// Test
console.log(add5(10)); // 15
console.log(add5(21)); // 26

const add = (a, b, c, d) => {
  return a + b + c + d;
};

// Well done!
//
// Using arrow functions `this` comes from the surrounding lexical context,
// while normally its value depends on the executional context. That said, an
// arrow function for the outer function in this example would not work because
// it's `this` value cannot be rebound to the Function object it's called upon.
Function.prototype.myBind = function(...first) {
  return (...rest) => this(...first, ...rest);
};

const add5and2 = add.myBind(5, 2);

// Test
console.log(add5and2(10, 1)); // 18
console.log(add5and2(21, 3)); // 31

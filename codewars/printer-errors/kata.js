const printerError = str => {
  const reducer = (acc, char) => {
    return (/[n-z]/.test(char)) ? acc + 1 : acc;
  };
  const count = str.split("").reduce(reducer, 0);
  return `${count}/${str.length}`;
};

console.log(printerError("aaabbbbhaijjjm")); // 0/14
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm")); // 8/22

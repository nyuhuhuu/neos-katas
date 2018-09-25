// code
String.prototype.rotChar = function(num, position) {
  const aOrd = "a".charCodeAt(0);
  const zOrd = "z".charCodeAt(0);
  const alphabetLength = zOrd - aOrd + 1;
  const charCode = this[position].charCodeAt(0);
  const rotatedCharCode = (charCode - aOrd + num) % alphabetLength + aOrd;
  return String.fromCharCode(rotatedCharCode);
};

String.prototype.rot = function(num) {
  return this.split("").map((char, position) => {
    if (/[a-z]/.test(char)) return this.rotChar(num, position);
    return char;
  }).join("");
};

const crack = text => {
  const limit = 26;
  for (let i = 1; i <= limit; i++) {
    let solution = text.rot(i);
    if (/price|test/.test(solution)) return solution;
  }
  throw new Error('No solution found!');
};

// test
console.log(crack('ikhcxvmutgdknimykxlahluxzbgvhffngbvtmbhgehpxkzxetmhikbvxlurmabkmrixkvxgmhgmnxlwtrtgwkxwnvxfbedlatdxikbvxlurtmextlmhgxwheetk'));
console.log(crack('jxyijuijsqiufqiiut'));
console.log(crack('btejeuijtuftu'));
console.log(crack('naqguvfgrfg'));


class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}


function parse1(str) {
  const sep = " -> ";
  const numbers = str.split(sep).map(n => parseInt(n, 10));
  let node = null;
  for (let i = numbers.length - 2; i >= 0; i--) {
    node = new Node(numbers[i], node);
  }
  return node;
};

function parse(str) {
  const sep = " -> ";
  return str.split(sep).slice(0, -1).reduceRight((node, n) => {
    return new Node(parseInt(n), node);
  }, null);
};


console.log(parse("1 -> 2 -> 3 -> null"));
console.log(parse("0 -> 1 -> 4 -> 9 -> 16 -> null"));
console.log(parse("null"));

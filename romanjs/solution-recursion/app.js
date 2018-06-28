function roman(n) {
  if (n == 0) { return '' }; // Fast return to handle n == 0 case

  const rules = {
     1: 'I',
     4: 'IV',
     5: 'V',
     9: 'IX',
     10: 'X',
     40: 'XL',
     50: 'L',
     90: 'XC',
     100: 'C',
     400: 'CD',
     500: 'D',
     900: 'CM',
     1000: 'M'
  };

  let closestLowestKey = Object.keys(rules).reverse().find((element) => {
    return element <= n;
  });

  if (n == parseInt(closestLowestKey)) {
    return rules[closestLowestKey];
  } else {
    return rules[closestLowestKey] + roman(n - closestLowestKey); // Where the recursive magic happens
  };
};

module.exports = roman;

// Example

//   roman(1504)

//   First run

//   n == 1504
//   closestLowestKey == 1000
//   n != closestLowestKey
//   End up on line 27 -> 'M' + roman(504)

//     Second run

//     n == 504
//     closestLowestKey == 500
//     n != closestLowestKey
//     end up on line 27 -> 'D' + roman(4)

//       Third run

//       n == 4
//       closestLowestKey == 4
//       n == closestLowestKey
//       end up on line 25 -> 'IV'

// Stack piling representation

//   roman(1504)

//   1. 'M' + roman(504)
//   2. 'M' + 'D' + roman(4)
//   3. 'M' + 'D' + 'IV'

//   roman(3345)

//   1. 'M' + roman(2345)
//   2. 'M' + 'M' + roman(1345)
//   3. 'M' + 'M' + 'M' + roman(345)
//   4. 'M' + 'M' + 'M' + 'C' + roman(245)
//   4. 'M' + 'M' + 'M' + 'C' + 'C' roman(145)
//   5. 'M' + 'M' + 'M' + 'C' + 'C' + 'C' + roman(45)
//   6. 'M' + 'M' + 'M' + 'C' + 'C' + 'C' + 'XL' + roman(5)
//   7. 'M' + 'M' + 'M' + 'C' + 'C' + 'C' + 'XL' + 'V'


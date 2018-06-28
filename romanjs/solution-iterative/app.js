function roman(n) {

    const rules = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let roman = "";
    for (let sym in rules) {
        let div = Math.floor(n / rules[sym]);
        roman += sym.repeat(div);
        n = n % rules[sym];
    }
    return roman;

}

module.exports = roman;

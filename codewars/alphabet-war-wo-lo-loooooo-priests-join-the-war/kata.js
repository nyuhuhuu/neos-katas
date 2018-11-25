const LEFT_CHARS = ["t", "s", "b", "p", "w"];
const RIGHT_CHARS = ["j", "z", "d", "q", "m"];

const alphabetWar = (fight) => {
    const afterFight = transform(fight);
    const score = getScore(afterFight);
    return judge(score);
};

const judge = (score) => {
    if (score > 0) return "Right side wins!";
    if (score < 0) return "Left side wins!";
    return "Let's fight again!";
};

const getScore = (fight) => {
    return fight.split("").reduce((score, char) => {
        if (LEFT_CHARS.includes(char)) return score - LEFT_CHARS.indexOf(char);
        if (RIGHT_CHARS.includes(char)) return score + RIGHT_CHARS.indexOf(char);
        return score;
    }, 0);
};

const transform = (fight) => {
    return fight.split("").map((char, idx) => {
        const prev = fight[idx-1];
        const next = fight[idx+1];
        const priest = getActivePriest(prev, char, next);
        return transformChar(char, priest);
    }).join("");
};

const transformChar = (char, priest) => {
    if (LEFT_CHARS.includes(priest) && RIGHT_CHARS.includes(char)) {
        return LEFT_CHARS[RIGHT_CHARS.indexOf(char)];
    }
    if (RIGHT_CHARS.includes(priest) && LEFT_CHARS.includes(char)) {
        return RIGHT_CHARS[LEFT_CHARS.indexOf(char)];
    }
    return char;
};

const getActivePriest = (prev, curr, next) => {
    if (isPriest(prev) && isPriest(next) && prev !== next) return null;
    if (isPriest(prev)) return prev;
    if (isPriest(next)) return next;
    return null;
};

const isPriest = (char) => char === LEFT_CHARS[0] || char === RIGHT_CHARS[0];

// tests

Test = { assertEquals: (actual, expected) => {
    if (actual == expected) console.log("TEST OK");
    else console.log(`TEST FAILED: ${actual} != ${expected}`);
}};

Test.assertEquals(alphabetWar("z"), "Right side wins!");
Test.assertEquals(alphabetWar("tz"), "Left side wins!");
Test.assertEquals(alphabetWar("jz"), "Right side wins!");
Test.assertEquals(alphabetWar("zt"), "Left side wins!");
Test.assertEquals(alphabetWar("sj"), "Right side wins!");
Test.assertEquals(alphabetWar("azt"), "Left side wins!");
Test.assertEquals(alphabetWar("tzj"), "Right side wins!");
Test.assertEquals(alphabetWar("jbdt"), "Let's fight again!");
Test.assertEquals(alphabetWar("wololooooo"), "Left side wins!");
Test.assertEquals(alphabetWar("zdqmwpbs"), "Let's fight again!");
Test.assertEquals(alphabetWar("ztztztzs"), "Left side wins!");
Test.assertEquals(alphabetWar("dpsjhdpbaipjg"), "Let's fight again!");
Test.assertEquals(alphabetWar("pedafjmtt"), "Right side wins!");
Test.assertEquals(alphabetWar("bjwjthgtjswbd"), "Right side wins!");

const breakTheWeb = (strength, width) => {
  const baseWeight = 1000;
  let elephantCount = 0;
  let totalWeight = 0;
  let currentWeight = baseWeight;
  let rowLimit = width;

  const isFitForElephants = () => strength < currentWeight || width < 1;
  const canHoldMoreElephants = () => totalWeight <= strength && width >= 0;
  const addElephant = () => {
    elephantCount += 1;
    totalWeight += currentWeight;
  };
  const isRowFullOfElephants = () => elephantCount >= rowLimit;
  const createNewRow = () => {
    width -= 1;
    rowLimit += width;
    currentWeight += baseWeight;
  };

  if (isFitForElephants()) {
    return 0;
  }

  while (canHoldMoreElephants()) {
    addElephant();
    if (isRowFullOfElephants()) {
      createNewRow();
    }
  };

  return elephantCount - 1;
};

console.log(breakTheWeb(10000, -1)); // 0
console.log(breakTheWeb(0, 12)); // 0
console.log(breakTheWeb(9200, 12)); // 9
console.log(breakTheWeb(19200, 2)); // 3
console.log(breakTheWeb(5000, 3)); // 4
console.log(breakTheWeb(9200, 3)); // 5

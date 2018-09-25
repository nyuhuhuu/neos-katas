class Web {
  constructor(strength, width) {
    this.strength = strength;
    this.width = width;
    this.baseWeight = 1000;
    this.elephantCount = 0;
    this.totalWeight = 0;
    this.currentWeight = this.baseWeight;
    this.rowLimit = this.width;
  }

  getElephantCount() {
    if (this.isFitForElephants()) {
      return 0;
    }
    while (this.canHoldMoreElephants()) {
      this.addElephant();
      if (this.isRowFullOfElephants()) {
        this.createNewRow();
      }
    };
    return this.elephantCount - 1;
  }

  isFitForElephants() {
    return this.strength < this.currentWeight || this.width < 1;
  }

  canHoldMoreElephants() {
    return this.totalWeight <= this.strength && this.width >= 0;
  }

  addElephant() {
    this.elephantCount += 1;
    this.totalWeight += this.currentWeight;
  };

  isRowFullOfElephants () {
    return this.elephantCount >= this.rowLimit;
  }

  createNewRow () {
    this.width -= 1;
    this.rowLimit += this.width;
    this.currentWeight += this.baseWeight;
  };

}

console.log(new Web(10000, -1).getElephantCount()); // 0
console.log(new Web(0, 12).getElephantCount()); // 0
console.log(new Web(9200, 12).getElephantCount()); // 9
console.log(new Web(19200, 2).getElephantCount()); // 3
console.log(new Web(5000, 3).getElephantCount()); // 4
console.log(new Web(9200, 3).getElephantCount()); // 5

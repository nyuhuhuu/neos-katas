const stockList = (books, categories) => {
  if (books.length == 0 || categories.length == 0) return "";
  const stock = getStockList(books, categories);
  return categories.map(cat => {
    const qty = cat in stock ? stock[cat] : 0;
    return `(${cat} : ${qty})`;
  }).join(" - ");
};

const getStockList = (books, categories) => {
  return books
    .filter(book => categories.includes(book[0]))
    .reduce((acc, book) => {
      const cat = book[0];
      const qty = parseInt(book.match(/\d+/).pop());
      acc[cat] = cat in acc ? acc[cat] + qty : qty;
      return acc;
    }, {});
};

const b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
const c = ["A", "B", "W"];
const res = "(A : 200) - (B : 1140)";
console.log(stockList(b, c));

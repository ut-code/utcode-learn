const book = {
  title: "吾輩は猫である",
  author: "夏目漱石",
  price: 600,
  stock: {
    count: 10,
    location: "神保町店",
  },
};

document.write(`在庫数は${book.stock.count}冊です。`); // 在庫数は10冊です。
book.stock.count = 9;
document.write(`在庫数は${book.stock.count}冊です。`); // 在庫数は9冊です。

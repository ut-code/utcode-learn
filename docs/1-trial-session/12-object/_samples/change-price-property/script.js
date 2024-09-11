const book = {
  title: "吾輩は猫である",
  author: "夏目漱石",
  price: 600,
};

document.write(`本の値段は${book.price}円です。`); // 本の値段は600円です。
book.price = 700;
document.write(`本の値段は${book.price}円です。`); // 本の値段は700円です。

const book = {
  title: "吾輩は猫である",
  author: "夏目漱石",
  price: 600,
  availability: {
    isAvailable: true,
    location: "2階E列",
  },
};

document.write(`本は${book.availability.location}にあります。`); // 本は2階E列にあります。
book.availability.location = "1階A列";
document.write(`本は${book.availability.location}にあります。`); // 本は1階A列にあります。

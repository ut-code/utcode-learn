const car = {
  make: "トヨタ",
  model: "プリウス",
  price: 3000000,
};

document.write(`車の値段は${car.price}円です。`); // 車の値段は2500000円です。
car.price = 3000000;
document.write(`車の値段は${car.price}円です。`); // 車の値段は3000000円です。

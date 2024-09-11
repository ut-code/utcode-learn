const car = {
  make: "トヨタ",
  model: "プリウス",
  price: 3000000,
  owner: {
    name: "山田花子",
    email: "yamada.hanako@example.com",
  },
};

document.write(`メールアドレスは${car.owner.email}です。`); // メールアドレスはyamada.hanako@example.comです。
car.owner.email = "yamada.hanako@example.jp";
document.write(`メールアドレスは${car.owner.email}です。`); // メールアドレスはyamada.hanako@example.jpです。

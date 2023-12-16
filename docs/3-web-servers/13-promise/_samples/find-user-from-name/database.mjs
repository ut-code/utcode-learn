const users = [
  { name: "鈴木", age: 20 },
  { name: "佐藤", age: 19 },
  { name: "高橋", age: 21 },
  { name: "工藤", age: 17 },
];

export default function findUserFromName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let user = users.find((user) => user.name == name);
      if (user) resolve(user);
      else reject("User not found!");
    }, 3000);
  });
}

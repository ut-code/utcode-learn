function fetchUserData(id) {
  return new Promise((resolve, reject) => {
    const users = [
      { name: "田中", age: 18 },
      { name: "鈴木", age: 20 },
      { name: "佐藤", age: 19 },
      { name: "高橋", age: 21 },
      { name: "工藤", age: 17 },
    ];
    setTimeout(() => {
      if (users[id]) resolve(users[id]);
      else reject("User not found!");
    }, 3000);
  });
}

async function showData(id) {
  const user = await fetchUserData(id);
  console.log(
    `id: ${id} の人の名前は ${user.name} 、年齢は ${user.age} 歳です。`,
  );
}
showData(0);
console.log("接続中...");

function fetchDataFromDatabase() {
  return new Promise((resolve, reject) => {
    const user = { name: "田中", age: 18 };
    setTimeout(() => {
      resolve(user);
    }, 3000);
  });
}

async function showData() {
  const user = await fetchDataFromDatabase();
  document.write(`ユーザーの名前は ${user.name} 、年齢は ${user.age} 歳です。`);
}
showData();
document.write("接続中...");

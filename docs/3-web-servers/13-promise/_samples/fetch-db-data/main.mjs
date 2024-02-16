import fetchUserData from "./database.mjs";
async function showData(id) {
  try {
    const user = await fetchUserData(id);
    console.log(`id:${id}の人の名前は${user.name}、年齢は${user.age}歳です。`);
  } catch {
    console.log(`idが${id}の人は見つかりませんでした。`);
  }
}
showData(0);
console.log("接続中...");

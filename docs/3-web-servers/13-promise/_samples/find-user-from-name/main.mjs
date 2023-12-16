import fetchUserData from "./database.mjs";
async function showData(name) {
  try {
    const user = await fetchUserData(name);
    console.log(`名前が${name}の人の年齢は ${user.age} 歳です。`);
  } catch {
    console.log(`名前が${name}の人は見つかりませんでした。`);
  }
}
showData("工藤");
showData("伊藤");
console.log("接続中...");

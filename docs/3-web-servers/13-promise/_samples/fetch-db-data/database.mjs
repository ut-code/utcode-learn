const users_db_side = [
  { name: "鈴木", age: 20 },
  { name: "佐藤", age: 19 },
  { name: "高橋", age: 21 },
  { name: "工藤", age: 17 },
];

/* 新しい Promise オブジェクトを作成して返しています。
                 詳しくは Promise コンストラクタの節で説明するので、
                    今は深く理解する必要はありません。 */
export default function fetchUserData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users_db_side[id]) resolve(users_db_side[id]);
      else reject("User not found!");
    }, 3000);
  });
}

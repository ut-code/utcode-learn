type Guest = { type: "guest" };
type General = { type: "general"; name: string };
type Premium = { type: "premium"; name: string; daysLeft: number };
type User = Guest | General | Premium;

function welcome(user: User) {
  if (user.type === "guest") {
    // この中では user は Guest 型として扱われる
    console.log(`ようこそ ゲストさん`);
  } else if (user.type === "general") {
    // この中では user は General 型として扱われる
    console.log(`ようこそ ${user.name}さん`);
  } else {
    // この中では user は Premium 型として扱われる
    console.log(
      `ようこそ ${user.name}さん プレミアム会員の有効期間は残り${user.daysLeft}日です`
    );
  }
}

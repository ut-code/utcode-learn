import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());

app.get("/", (request, response) => {
  // Cookieの値は文字列なので数値に変換が必要
  const count = Number.parseInt(request.cookies.count) || 0;
  const newCount = count + 1;
  // 変更後の値をレスポンスヘッダに乗せる
  response.cookie("count", newCount.toString());
  response.send(`${newCount}回目のアクセスですね。`);
});

app.listen(3000);

import express from "express";

const app = express();
app.use(express.static("./public"));
// リクエストボディをJSONとして解釈する
app.use(express.json());

const account = { balance: 100000 };
app.post("/transaction", (request, response) => {
  // リクエストボディはrequest.bodyに格納される
  account.balance += request.body.amount;
  response.json(account);
});

app.listen(3000);

import express from "express";

const app = express();
app.use(express.static("./public"));
app.use(express.json());

const unitPrice = 500;
const sales = {
  quantity: 0,
  total: 0,
};
app.post("/sales", (request, response) => {
  sales.quantity += request.body.quantity;
  sales.total += unitPrice * request.body.quantity;
  response.json(sales);
});

app.listen(3000);

import express from "express";

const app = express();

app.use(express.static("./public"));
app.use(express.json());

const taxRate = 0.1;

app.post("/calculate", (request, response) => {
  const tax = request.body.subtotal * taxRate;
  const total = tax + request.body.subtotal;
  response.json({
    tax: tax,
    total: total,
  });
});

app.listen(3000);

import express from "express";

const app = express();

app.use(express.static("./public"));

app.get("/open-status", (request, response) => {
  response.json({
    isOpen: true,
    openTime: "10:00",
    closeTime: "18:00",
  });
});

app.listen(3000);

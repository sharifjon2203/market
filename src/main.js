import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(new Date());
});

app.get("/block", (req, res) => {
  for (let i = 0; i < 2e10; i++) {
    ///
  }

  res.send(new Date());
});

app.listen(5000, () => {
  console.log(5000);
});

import express from "express";
import { connectionDB } from "./db/index.js";
import { User } from "./models/index.js";

const app = express();

connectionDB();
app.use(express.json());

app.post("/auth/register", async (req, res, next) => {
  try {
    const body = req.body;
    const user = new User(body);

    await user.save();

    res.send(user);
  } catch (error) {
    console.log(message);
    res.send(error);
  }
});
app.post("/auth/login", (req, res, next) => {
  try {
    const body = req.body;
  } catch (error) {
    res.send(error);
  }
});

app.listen(4000, () => {
  console.log("server running on port 4000");
});

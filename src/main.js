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
app.post("/auth/login", async (req, res, next) => {
  try {
    const body = req.body;
    // email\username , password
    const user = await User.findOne({ email: body.email });
    if (!user) {
      res.status(404).send("User not found");
      return;
    }
    console.log(user);

    if (body.password !== user.password) {
      res.status(401).send("user detail wrong!");
      return;
    }

    res.send("login page");
  } catch (error) {
    res.send(error);
  }
});

app.listen(4000, () => {
  console.log("server running on port 4000");
});

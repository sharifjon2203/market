import express from "express";

import { client } from "./db/index.js";
import { productRouter, userRouter } from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);
app.use("/product", productRouter);

app.post("/user", async (req, res, next) => {
  try {
    const body = req.body;

    const query = `insert into
        users (
            first_name,
            last_name,
            email,
            password,
            phone_number,
            address
        )
    values
        (
            $1,
            $2,
            $3,
            $4,
            $5,
            $6
        ) RETURNING *`;
    const result = await client.query(query, [
      body.firstName,
      body.lastName,
      body.email,
      body.password,
      body.phoneNumber,
      body.address,
    ]);
    res.status(201).json(result.rows);
  } catch (e) {
    res.send(e.message);
  }
});

app.get("/user", async (req, res, next) => {
  try {
    const query = `SELECT * FROM person`;
    const result = await client.query(query);

    console.log(result.rowCount);
    if (result.rowCount === 0) {
      res.status(404).send("Users not found");
      return;
    }
    res.status(201).json(result.rows);
  } catch (e) {
    res.send(e.message);
  }
});

app.put("/user/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const query = `SELECT * FROM person where id = ${id}`;
    const result = await client.query(query);
    // const query = `SELECT * FROM person where id = $1`;

    // const result = await client.query(query, [id]);

    const user = res.status(201).json(result.rows);
  } catch (e) {
    res.send(e.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const body = req.body;

    // const query = `SELECT * FROM users where username = '${body.username}' and password = '${body.password}'`;
    const query = `SELECT * FROM users where username = $1 and password = $2`;

    const result = await client.query(query, [body.username, body.password]);

    if (result.rowCount === 0) {
      res.send("Not found");
    }
    res.send(result.rows);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(3000, () => {
  console.log(3000);
});

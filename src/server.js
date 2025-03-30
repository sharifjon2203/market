import express from "express";

import client from "./db.js";

const app = express();

app.use(express.json());

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
    const query = `SELECT * FROM users`;
    const result = await client.query(query);
    res.status(201).json(result.rows);
  } catch (e) {
    res.send(e.message);
  }
});

app.listen(3000, () => {
  console.log(3000);
});

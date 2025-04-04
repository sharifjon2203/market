import pg from "pg";
const { Pool } = pg;

export const client = new Pool({
  user: process.env.PG_USER || "postgres",
  password: process.env.PG_PASSWORD || "1532",
  host: process.env.PG_HOST || "localhost",
  port: process.env.PG_PORT || 5432,
  database: process.env.PG_DATABASE || "blog_app",
});
await client.connect();

// const result = await client.query("SELECT * from users");
// console.log(JSON.stringify(result.rows));

// const result = await client.query("SELECT $1::text as name", ["brianc"]);

// const result2 = await client.query(`SELECT ${name}::text as name`);

// console.log (result);

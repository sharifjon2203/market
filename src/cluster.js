import cluster from "node:cluster";
import { availableParallelism } from "node:os";
import process from "node:process";
import express from "express";

const app = express();

app.use(express.json());

const numCPUs = availableParallelism();

console.log(numCPUs);
if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  for (let i = 0; i < 2; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  app.get("/", (req, res) => {
    res.send(new Date());
  });

  app.get("/block", (req, res) => {
    for (let i = 0; i < 2e10; i++) {
      //
    }

    res.send(new Date());
  });

  app.listen(5000, () => {
    console.log(5000);
  });

  console.log(`Worker ${process.pid} started`);
}

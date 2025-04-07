import { createServer } from "node:http";
import { createReadStream } from "node:fs";

const server = createServer(async (req, res) => {
  const method = req.method;
  const url = req.url;
  const headers = req.headers;

  const stream = createReadStream("./test.txt");
  stream.pipe(res);
  // res.end(result);
});

server.listen(4000, () => {
  console.log("Server start 4000");
});

import { pipeline } from "stream" ;
import fs from "node:fs";
import zlib from "node:zlib";

// Use the pipeline API to easily pipe a series of streams
// together and get notified when the pipeline is fully done.
// A pipeline to gzip a potentially huge video file efficiently:

pipeline(
  fs.createReadStream("lesson.mp4"),
  zlib.createGzip(),
  fs.createWriteStream("lesson.zip"),
  (err) => {
    if (err) {
      console.error("Pipeline failed", err);
    } else {
      console.log("Pipeline succeeded");
    }
  },
);

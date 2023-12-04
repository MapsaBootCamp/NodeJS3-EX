import { createReadStream, createWriteStream } from "fs";
import { Transform } from "stream";
import csv from "csv-parser";

const readStream = createReadStream("file.csv", "utf8");
const writeStream = createWriteStream("fileout.json", "utf8");
const resJson = [];

const csvToJson = new Transform({
  objectMode: true,
  transform(chunk, encoding, callback) {
    this.push(chunk);
    callback();
  },
});

readStream
  .pipe(csv())
  .pipe(csvToJson)
  .on("data", (data) => {
    resJson.push(data);
  })
  .on("end", () => {
    const jsonString = JSON.stringify(resJson, null, 2);
    writeStream.write(jsonString);
  });
